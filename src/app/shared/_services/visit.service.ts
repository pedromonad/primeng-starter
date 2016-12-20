import { Injectable } from '@angular/core';
import { Visit } from '../_models/visit';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class VisitService{
  private url = 'http://localhost:4040/apiv1/clients/';
  private token = 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
  private headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token,  'Access-Control-Allow-Origin': '*' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) {
  }

  getVisitsByClient (clientId): Observable<Visit[]> {
    return this.http.get(this.url + clientId + '/comments', this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getAllVisits (): Observable<Visit[]> {
    return this.http.get('http://localhost:4040/apiv1/visits', this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  add (clientId, visit: Visit): Observable<Visit> {
    let body = JSON.stringify(visit);
    return this.http.post(this.url + clientId + '/comments', body, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
                    
  }

  update(clientId, visit: Visit) {
    let body = JSON.stringify(visit);
    return this.http.put(this.url + clientId + '/comments/' + visit.id, body, this.options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  remove(clientId, visit: Visit)  {
    return this.http.delete(this.url + clientId + '/comments/' + visit.id, this.options)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}