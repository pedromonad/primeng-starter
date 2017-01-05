import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OnInit, ChangeDetectorRef } from '@angular/core';
import { Dialog } from 'primeng/primeng';

import { ScheduleService } from '../common/_services/schedule.service';


@Component({
  selector: 'home',
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class HomeComponent {
    localState; 
    events: any;
    header: any;   
    event: MyEvent;  
    dialogVisible: boolean = false;  
    idGen: number = 100;
    display: boolean = false;
    
    constructor(public route: ActivatedRoute, 
    private _scheduleService: ScheduleService,
    private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.getSchedules();
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay',
            locate: 'pt-br'
        };
    }

    getSchedules() {
        this._scheduleService.getAllSchedules().subscribe(
            data => this.events = data,
            error => console.log(error)
        );
    }

    showDialog() {
        this.display = true;
    }

    handleDayClick(event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
        
        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    }
    
    handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if(e.view.name === 'month') {
            start.stripTime();
        }
        
        if(end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }
    
    saveEvent() {
        //update
        if(this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if(index >= 0) {
                this.events[index] = this.event;
            }
        }
        //new
        else {
            this.event.id = this.idGen;
            this.events.push(this.event);
            this.event = null;
        }
        
        this.dialogVisible = false;
    }
    
    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if(index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    
    findEventIndexById(id: number) {
        let index = -1;
        for(let i = 0; i < this.events.length; i++) {
            if(id == this.events[i].id) {
                index = i;
                break;
            }
        }
        
        return index;
    }
}

export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = true;
}