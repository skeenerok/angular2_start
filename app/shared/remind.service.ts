import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IRemind } from './remind.model';

@Injectable()
export class RemindService {
    //private apiUrl = 'http://localhost:8080/reminders';
    //private apiUrl = 'http://192.168.0.14:8080/reminders';
    private apiUrl = 'http://93.79.81.147:5555/reminders';

    constructor(private http: Http) {}

    getReminds(): Promise<IRemind[]> {
        var apiUrl1: string = 'api/remind';
        return this.http.get(this.apiUrl)
                    .toPromise()
                    .then(res =>  res.json())
                    .catch(this.handleError);
    }

    addRemind(remind: IRemind): Promise<IRemind> {
        return this.post(remind);
    }

    saveRemind(remind: IRemind): Promise<IRemind> {
        return this.post(remind);
    }

    deleteRemind(remind: IRemind): Promise<IRemind> {
        return this.delete(remind);
    }

    private post(remind: IRemind): Promise<IRemind> {
        let promise: Promise<IRemind>;
        let body = JSON.stringify(remind);
        console.log("post-" + remind.remindDate);
        console.log(<IRemind> remind);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        promise = this.http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError);
        console.log(promise.then(res => console.log(res )));
        return promise;
    }

    private put(remind: IRemind): Promise<IRemind> {
        let body = JSON.stringify(remind);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${remind.id}`;

        return this.http.put(url, body, options)
                        .toPromise()
                        .then(res => remind)
                        .catch(this.handleError);
    }

    private delete(remind: IRemind): Promise<IRemind> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${remind.id}`;

        return this.http.post(url, options)
                        .toPromise()
                        .then(res => remind)
                        .catch(this.handleError);
    }

private handleError(error: any): Promise<any> {
        console.log('Произошла ошибка', error);
         return Promise.reject(error.message || error);
    }
}