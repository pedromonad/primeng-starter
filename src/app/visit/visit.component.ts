import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ActivatedRoute} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { VisitService } from '../shared/_services/visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.template.html',
  styleUrls: ['./visit.style.css']
})
export class VisitComponent implements OnInit {

  private histories = [];
  private isLoading = true;

  private visit = {};
  private isEditing = false;
  private clientId;

  private addVisitForm: FormGroup;
  private description = new FormControl("", Validators.required);
  
  private infoMsg = { body: "", type: "info"};

  constructor(private http: Http,
              private _routeParams: ActivatedRoute,
              private _visitService: VisitService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this._routeParams.params.subscribe(params => {
        this.clientId = params['clientId'];
        this.getVisit();
        console.log(this.clientId);
    });

    
    this.addVisitForm = this.formBuilder.group({
      description: this.description
    });

  }

  getVisit() {
    this._visitService.getVisitsByClient(this.clientId).subscribe(
      data => this.histories = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addVisit() {
    
    this._visitService.add(this.clientId, this.addVisitForm.value).subscribe(
      res => {
        var newVisit = res;
        this.histories.push(newVisit);
        this.addVisitForm.reset();
        this.sendInfoMsg("item added successfully.", "success");
      },
      error => console.log(error)
    );
  }

  enableEditing(visit) {
    this.isEditing = true;
    this.visit = visit;
  }

  cancelEditing() {
    this.isEditing = false;
    this.visit = {};
    this.sendInfoMsg("item editing cancelled.", "warning");
    // reload the visit to reset the editing
    this.getVisit();
  }

  deleteVisit(visit) {
    if(window.confirm("Are you sure you want to permanently delete this item?")) {
      this._visitService.remove(this.clientId, visit).subscribe(
        res => {
          var pos = this.histories.map(visit => { return visit.id }).indexOf(visit.id);
          this.histories.splice(pos, 1);
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
