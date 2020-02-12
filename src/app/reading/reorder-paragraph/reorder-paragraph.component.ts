import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { APIService } from '../../api.servce';

@Component({
    selector: 'app-reorder-paragraph',
    styleUrls: ['./reorder-paragraph.component.scss'],
    templateUrl: './reorder-paragraph.component.html'
})

export class ReorderParagraphComponent implements OnInit, OnChanges {
    @Input() jumbledPara;
    source: Array<string>;
    target = [];
    correctIndex = [];
    shuffledArr = [];
    solution;
    disableList = false;

    constructor(private apiService: APIService) {
    }

    ngOnInit() {
        this.apiService.getReorderParas().subscribe((data) => {
            this.source = data.para;
            console.log('DATA: ' , this.source);
            this.shuffleSourceList();
        });
    }

    ngOnChanges(change: SimpleChanges) {
        if (change.jumbledPara.firstChange) {
            return;
        }
        this.target = [];
    }
    /**
     * below function will shuffle the source array.
     */
    shuffleSourceList() {
        this.shuffledArr = [...this.source];
        this.shuffledArr.sort(() => Math.random() - 0.5);
        console.log('Shuffled Array: ', this.shuffledArr);
    }

    checkOrder() {
        for (let i = 0; i < this.target.length; i++) {
            if (this.target[i] === this.source[i]) {
                this.correctIndex.push(i);
            }
        }
        this.solution = this.source;
        this.disableList = true;
        console.log('Correct Index: ', this.correctIndex);
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

}
