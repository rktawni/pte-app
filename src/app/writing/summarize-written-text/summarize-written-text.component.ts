import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-writing-swt',
    templateUrl: './summarize-written-text.coponent.html',
    styleUrls: ['./summarize-written-text.component.scss']
})
export class SummarizeWrittenTextComponent implements OnInit {

    @Input() paragraph: string[];
    constructor() {
    }
    ngOnInit(): void {
        console.log("Summarize written text")
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
    countWords(evt: any) {
       // console.log("Keyboard Event: ", evt);
        const words = evt.target.value.match(/\b[-?(\w+)?]+\b/gi);
        console.log(' Word count: ', words);
    }
}
