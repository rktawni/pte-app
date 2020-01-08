import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {

    constructor(private httpClient: HttpClient) {

    }

    getReorderParas(): Observable<any> {
       return this.httpClient.get('./assets/jumbledParas.json');
    }
    getReadingSection(): Observable<any> {
        return this.httpClient.get('./assets/reading.json');
    }
    getReadWriteFIB(): Observable<any> {
        return this.httpClient.get('./assets/rwFillInTheBlank.json');
    }
}
