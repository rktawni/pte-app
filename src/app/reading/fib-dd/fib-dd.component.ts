import { Component, Input, ViewChild, TemplateRef, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-fib-dd',
	templateUrl: './fib-dd.component.html',
	styleUrls: ['./fib-dd.component.scss']
})
export class FillInTheBlankDDComponent implements OnChanges {
	@Input() fibData;
	@ViewChild('template', { read: TemplateRef, static: true }) template: TemplateRef<any>;
	@ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
	paraArray;
	options;
	currentElementID;
	constructor() {

	}

	clearContainer() {
		if (this.container.length) {
			this.container.remove(0);
			this.clearContainer();
		}
	}

	// Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
	ngOnChanges(changes: SimpleChanges): void {
		this.clearContainer();
		if (this.fibData) {
			this.paraArray = this.fibData.para.split('#');
			this.options = this.fibData.options;

			for (let i = 0; i < this.paraArray.length; i++) {
                const viewRef = this.createTemplate(i);
                this.container.insert(viewRef);
            }
		}
	}
	createTemplate(elementIndex: number) {
        return this.template.createEmbeddedView({
            paragraph: this.paraArray[elementIndex]
        });
	}

	drop(evt) {
		console.log('Object Dropped: ', evt);
		evt.preventDefault();
		const data = evt.dataTransfer.getData('id');
    	evt.target.appendChild(document.getElementById(this.currentElementID));
	}

	allowDrop(evt) {
		evt.preventDefault();
	}

	onDragStart(evt) {
		this.currentElementID = evt.target.id;
		console.log("Option Element: ", evt.target.innerText);
	}
}
