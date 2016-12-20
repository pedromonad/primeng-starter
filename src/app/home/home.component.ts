import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OnInit, ChangeDetectorRef } from '@angular/core';
import { CarService } from '../service/carservice';

console.log('`Home` component loaded asynchronously');

@Component({
  selector: 'home',
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class HomeComponent {
  localState;
  
  events: any[];
  header: any;   
  event: MyEvent;  
  dialogVisible: boolean = false;  
  idGen: number = 100;
  
  constructor(public route: ActivatedRoute, private cd: ChangeDetectorRef) { }

  ngOnInit() {
      this.events = [
          {
              "title": "All Day Event",
              "start": "2016-01-01"
          },
          {
              "title": "Long Event",
              "start": "2016-01-07",
              "end": "2016-01-10"
          },
          {
              "title": "Repeating Event",
              "start": "2016-01-09T16:00:00"
          },
          {
              "title": "Repeating Event",
              "start": "2016-01-16T16:00:00"
          },
          {
              "title": "Conference",
              "start": "2016-01-11",
              "end": "2016-01-13"
          }
      ];
  
      
      this.header = {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      };

      console.log('hello `Home` component');
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