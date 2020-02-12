import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.servce';

@Component({
    selector: 'app-reading',
    templateUrl: './reading.component.html',
    styleUrls: ['./reading.component.scss']
})

export class ReadingComponent implements OnInit {
    progress = 2;
    rwFIB = {}; // Dropdown fill in the blank
    fib;
    testRWFIB = []; // will hold all the read write FIBs
    readingFIB = []; // Drag and Drop fill in the blank
    testReorderParagraph = []; // reorder paragraph
    jumbledPara;
    mcmaTest;
    mcma = []; // Multiple choise multiple answer
    mcsa = []; // Multiple choise single answer
    responseData;

    constructor(private apiService: APIService) {}

    ngOnInit() {
        this.apiService.getReadingSection().subscribe({
            next: this.handleReadResponse.bind(this),
            error: this.handleReadError.bind(this)
        });
    }

    handleReadError(data) {

    }
    handleReadResponse(data) {
        this.responseData = data;
        console.log('Read Response: ', this.responseData);
        this.testRWFIB = data.readWriteFIB.fib;
        this.testReorderParagraph = data.reorderParagraph.paragraphs;
        this.mcma = data.readingMCMA.mcma;
        this.readingFIB = data.readingFIB.fib;
        this.loadNextQuestion();
    }

    loadNextQuestion() {
        if (this.testRWFIB.length) {
            this.rwFIB = this.testRWFIB.shift();
        } else if (this.testReorderParagraph.length) {
            this.rwFIB = undefined;
            this.jumbledPara = this.testReorderParagraph.shift();
        } else if (this.mcma.length) {
            this.jumbledPara = undefined;
            this.mcmaTest = this.mcma.shift();
        } else if (this.readingFIB.length) {
            this.mcmaTest = undefined;
            this.fib = this.readingFIB.shift();
        }
    }
}
