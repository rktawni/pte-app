import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { APIService } from '../../api.servce';

@Component({
    selector: 'read-write-fib',
    templateUrl: './read-write-FIB.component.html',
    styleUrls: ['./read-write-FIB.component.scss']
})
export class ReadWriteFIBComponent implements OnInit, AfterViewInit, OnChanges {

    @Input() rwFIBData;
    @ViewChild('template', { read: TemplateRef, static: true }) template: TemplateRef<any>;
    @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

    paraArray: Array<Array<string>> = [];
    optionsArray: Array<string>;
    constructor(private apiService: APIService) { }

    ngOnInit() {
        /*this.apiService.getReadWriteFIB().subscribe((data) => {
            this.paraArray = data.para.split('#');
            this.optionsArray = data.options;
            for (let i = 0; i < this.paraArray.length; i++) {
                const viewRef = this.createTemplate(i);
                this.container.insert(viewRef);
            }
        });*/
        console.log('ngOnINIT');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Change: ', this.rwFIBData);
        console.log("Change Value: ", changes);
        if (changes.rwFIBData.firstChange) {
            return;
        }
        // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        // Add '${implements OnChanges}' to the class.
        this.clearContainer();
        if ( this.rwFIBData ) {
            this.paraArray = this.rwFIBData.para.split('#');
            this.optionsArray = this.rwFIBData.options;

            for (let i = 0; i < this.paraArray.length; i++) {
                const viewRef = this.createTemplate(i);
                this.container.insert(viewRef);
            }
        }

    }

    clearContainer() {
        if (this.container.length) {
            this.container.remove(0);
            this.clearContainer();
        }
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
