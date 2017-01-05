import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ScheduleService } from '../common/_services/schedule.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.template.html',
  styleUrls: ['./schedules.style.css']
})
export class SchedulesComponent implements OnInit {

  private schedules = [];
  private isLoading = true;

  private schedule = {};
  private isEditing = false;
  private clientId;

  private addScheduleForm: FormGroup;
  private title = new FormControl("", Validators.required);
  private start = new FormControl;
  private end = new FormControl;
  
  private infoMsg = { body: "", type: "info"};

  constructor(private http: Http,
              private _routeParams: ActivatedRoute,
              private _scheduleService: ScheduleService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this._routeParams.params.subscribe(params => {
        this.clientId = params['clientId'];
        this.getSchedule();
    });

    
    this.addScheduleForm = this.formBuilder.group({
      title: this.title,
      start: this.start,
      end: this.end
    });

  }

  getSchedule() {
    this._scheduleService.getSchedulesByClient(this.clientId).subscribe(
      data => this.schedules = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addSchedule() {
    
    this._scheduleService.add(this.clientId, this.addScheduleForm.value).subscribe(
      res => {
        let newSchedule = res;
        this.schedules.push(newSchedule);
        this.addScheduleForm.reset();
        this.sendInfoMsg("item added successfully.", "success");
      },
      error => console.log(error)
    );
  }

  enableEditing(schedule) {
    this.isEditing = true;
    this.schedule = schedule;
  }

  cancelEditing() {
    this.isEditing = false;
    this.schedule = {};
    this.sendInfoMsg("item editing cancelled.", "warning");
    // reload the schedule to reset the editing
    this.getSchedule();
  }

  deleteSchedule(schedule) {
    if(window.confirm("Are you sure you want to permanently delete this item?")) {
      this._scheduleService.remove(this.clientId, schedule).subscribe(
        res => {
          var pos = this.schedules.map(schedule => { return schedule.id }).indexOf(schedule.id);
          this.schedules.splice(pos, 1);
          this.sendInfoMsg("item deleted successfully.", "success");
        },
        error => console.log(error)
      );
    }
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = "", time);
  }

}
