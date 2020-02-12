import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class APIService {

    constructor(private httpClient: HttpClient) {

    }

    getReorderParas(): Observable<any> {
       return this.httpClient.get('./assets/jumbledParas.json');
    }
    getReadingSection(): Observable<any> {
        return forkJoin({
            reorderParagraph: this.httpClient.get('./assets/reorderParagraph.json'),
            readWriteFIB: this.httpClient.get('./assets/rwFillInTheBlank.json'),
            readingMCMA: this.httpClient.get('./assets/reading-mcma.json'),
            readingFIB: this.httpClient.get('./assets/fillInTheBlank.json')
        });
        // return this.httpClient.get('./assets/reading.json');
    }
    getReadWriteFIB(): Observable<any> {
        return this.httpClient.get('./assets/rwFillInTheBlank.json');
    }
}
