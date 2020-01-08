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
    testRWFIB = []; // will hold all the read write FIBs
    readingFIB = []; // Drag and Drop fill in the blank
    reorderParagraph = []; // reorder paragraph
    mcma = []; // Multiple choise multiple answer
    mcsa = []; // Multiple choise single answer

    constructor(private apiService: APIService) {}

    ngOnInit() {
        this.apiService.getReadWriteFIB().subscribe({
            next: this.handleReadResponse.bind(this),
            error: this.handleReadError.bind(this)
        });
        console.log('ngOnINIT');
    }

    handleReadError(data) {

    }
    handleReadResponse(data) {
        console.log('Read Response: ', data);
        this.testRWFIB = data.fib;
        this.rwFIB =  this.testRWFIB.shift();
    }

    loadNextQuestion() {
        if (this.testRWFIB.length) {
            this.rwFIB = this.testRWFIB.shift();
        }
    }
}
