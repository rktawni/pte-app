import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-test-header',
	templateUrl: './app-test-header.component.html',
	styleUrls: ['./app-test-header.component.scss']
})
export class AppTestHeaderComponent implements OnInit {

	@Input() title: string;
	@Input() numberOfQuestions: number;
	@Input() duration: number; // it will be in seconds.

	currentQuestion = 1;
	currentTime = 0;
	timeRemaining;
	intervalID;
	totalTime;
	constructor() { }

	ngOnInit(): void {
		this.totalTime = this.duration / 60;
		this.intervalID = setInterval(() => {
			this.currentTime++;
			//this.timeRemaining = ``
		  }, 1000);
	}

}
