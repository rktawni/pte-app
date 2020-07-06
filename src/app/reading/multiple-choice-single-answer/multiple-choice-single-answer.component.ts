import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-mcsa',
    templateUrl: 'multiple-choice-single-answer.component.html',
    styleUrls: ['multiple-choice-single-answer.component.scss']
})
export class MultipleChoiceSingleAnswerComponent implements OnChanges {
    @Input() mcsaData;
    paraArray: Array<string>;
    answerOption: Array<string>;
    question: string;
    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        this.paraArray = this.mcsaData.paragraphs;
        this.answerOption = this.mcsaData.options;
        this.question = this.mcsaData.question;
    }
}
