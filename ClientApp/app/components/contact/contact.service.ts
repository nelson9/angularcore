import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';


@Injectable()
export class ContactService {

    constructor(private http: Http) { }
    private contactUrl: string = "http://localhost:52595/api/Contact";

    sendContactMessage(contact: Contact): Promise<Contact> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.contactUrl, contact, options).toPromise()
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
        console.log(body);
        return body || {};
    }
}

