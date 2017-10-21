import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {
    private _serviceUrl = 'api/home';
    
    constructor(private _http: Http) { }

    sayHello(): Observable <string>  {
        return this._http.get(this._serviceUrl)
            .map((response: Response) => {
                return response.text();
            });
    }
        SendEmail(contact): Observable <string>{
            console.log(contact);
            return this._http.post('api/home/SendEmail', contact)
             .map((response: Response) => {
                return response.text();
            });
        }
}