import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReorderParagraphComponent } from './reading/reorder-paragraph/reorder-paragraph.component';
import { APIService } from './api.servce';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ReadingComponent } from './reading/reading.component';
import { ReadWriteFIBComponent } from './reading/read-write-FIB/read-write-FIB.component';
import { MultipleChoiceMultipleAnswerComponent } from './reading/multiple-choice-multiple-answer/multiple-choice-multiple-answer.component';
import { FillInTheBlankDDComponent } from './reading/fib-dd/fib-dd.component';

@NgModule({
  declarations: [
    AppComponent,
    ReorderParagraphComponent,
    ProgressBarComponent,
    ReadingComponent,
    ReadWriteFIBComponent,
    MultipleChoiceMultipleAnswerComponent,
    FillInTheBlankDDComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
