import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { QuestionSet } from './questionSet';


@Injectable()
export class LevelTestService {

    constructor(private http: Http) { }
    private levelTestUrl: string = "http://www.spanish-in-london.co.uk/api/LevelTest";

    async getQuestionSet(): Promise<Array<QuestionSet>>{
   
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return await this.http.get(this.levelTestUrl, options).toPromise()
            .then(this.extractData)
            .catch(
                this.handleErrorPromise
            );      
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        let body = res.json();     
        return body || {};
    }
}
