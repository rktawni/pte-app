import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-mcma',
    templateUrl: 'multiple-choice-multiple-answer.component.html',
    styleUrls: ['multiple-choice-multiple-answer.component.scss']
})
export class MultipleChoiceMultipleAnswerComponent implements OnChanges {
    @Input() mcmaData;
    paraArray: Array<string>;
    answerOption: Array<string>;
    question: string;
    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        this.paraArray = this.mcmaData.paragraphs;
        this.answerOption = this.mcmaData.options;
        this.question = this.mcmaData.question;
    }
}
