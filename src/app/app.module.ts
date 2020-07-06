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
import { MultipleChoiceSingleAnswerComponent } from './reading/multiple-choice-single-answer/multiple-choice-single-answer.component';
import { WritingComponent } from './writing/writing.component';
import { SummarizeWrittenTextComponent } from './writing/summarize-written-text/summarize-written-text.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppTestHeaderComponent } from './common/app-test-header/app-test-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ReorderParagraphComponent,
    ProgressBarComponent,
    ReadingComponent,
    ReadWriteFIBComponent,
    MultipleChoiceMultipleAnswerComponent,
    MultipleChoiceSingleAnswerComponent,
    FillInTheBlankDDComponent,
    WritingComponent,
    SummarizeWrittenTextComponent,
    AppTestHeaderComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
