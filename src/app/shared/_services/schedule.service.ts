import { Injectable } from '@angular/core';
import { Schedule } from '../_models/schedule';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ScheduleService{
  private url = 'http://localhost:4040/apiv1/clients/';
  private token = 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
  private headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token,  'Access-Control-Allow-Origin': '*' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) {
  }

  getSchedulesByClient (clientId): Observable<Schedule[]> {
    return this.http.get(this.url + clientId + '/schedules', this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getAllSchedules (): Observable<Schedule[]> {
    return this.http.get('http://localhost:4040/apiv1/schedules', this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  add (clientId, schedule: Schedule): Observable<Schedule> {
    let body = JSON.stringify(schedule);
    return this.http.post(this.url + clientId + '/schedules', body, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
                    
  }

  update(clientId, schedule: Schedule) {
    let body = JSON.stringify(schedule);
    return this.http.put(this.url + clientId + '/schedules/' + schedule.id, body, this.options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  remove(clientId, schedule: Schedule)  {
    return this.http.delete(this.url + clientId + '/schedules/' + schedule.id, this.options)
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