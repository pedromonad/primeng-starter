import { Injectable } from '@angular/core';
import { Client } from '../_models/client';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService{
  private url = 'http://localhost:4040/apiv1/clients/';
  private token = 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
  private headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
  }

  getAll (): Observable<Client[]> {
    return this.http.get(this.url, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  add (client: Client): Observable<Client> {
    let body = JSON.stringify(client);
    return this.http.post(this.url, body, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
                    
  }

  update(client: Client) {
    let body = JSON.stringify(client);
    return this.http.put(this.url + client.id, body, this.options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  remove(client: Client)  {
    return this.http.delete(this.url + client.id, this.options)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    //return body.data || { };
    return body.data || { };
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}