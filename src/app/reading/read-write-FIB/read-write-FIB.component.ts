import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { APIService } from '../../api.servce';

@Component({
    selector: 'read-write-fib',
    templateUrl: './read-write-FIB.component.html',
    styleUrls: ['./read-write-FIB.component.scss']
})
export class ReadWriteFIBComponent implements OnInit, AfterViewInit {

    @ViewChild('template', { read: TemplateRef, static: true }) template: TemplateRef<any>;
    @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

    paraArray: Array<Array<string>> = [];
    optionsArray: Array<string>;
    constructor(private apiService: APIService) { }

    ngOnInit() {
        this.apiService.getReadWriteFIB().subscribe((data) => {
            console.log('Data is HERE: ', data);
            this.paraArray = data.para.split('#');
            this.optionsArray = data.options;
            console.log("Para Array ", this.paraArray);
            console.log("Options Array: ", this.optionsArray);
            for (let i = 0; i < this.paraArray.length; i++) {
                let viewRef = this.createTemplate(i);
                this.container.insert(viewRef);
            }
        });
        console.log('ngOnINIT');
    }

    ngAfterViewInit(): void {
        console.log('After View Init');
        /*for (let i = 0; i < this.paraArray.length; i++) {
          let viewRef = this.createTemplate(i);
          this.container.insert(viewRef);
        }*/

    }

    createTemplate(elementIndex: number) {
        return this.template.createEmbeddedView({
            paragraph: this.paraArray[elementIndex],
            ddData: this.optionsArray[elementIndex]
        });
    }
}
