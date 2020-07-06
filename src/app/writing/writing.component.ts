import { OnInit, Component } from '@angular/core';
import { APIService } from '../api.servce';
@Component({
    selector: 'app-writing',
    templateUrl: './writing.component.html',
    styleUrls: ['./writing.component.scss']
})

export class WritingComponent implements OnInit {

    summarizeText = [];
    essayTopics = [];
    constructor(private apiService: APIService) {

    }
    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.

        this.apiService.getWriting().subscribe({
            next: this.handleResponse.bind(this),
            error: this.handleError.bind(this)
        });

    }
    handleResponse(data: any) {
        console.log('Response : ', data);
        this.summarizeText = data.summarizeText;
        this.essayTopics = data.essay;
    }
    handleError(err: any) {
        console.log('Error: ', err);
    }
}
