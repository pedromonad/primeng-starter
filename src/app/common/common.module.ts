import { NgModule } from '@angular/core';
//import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ClientService } from '../common/_services/client.service';
import { ScheduleService } from '../common/_services/schedule.service';
import { AuthGuard } from '../common/_guards/auth.guard';
import { AuthenticationService } from '../common/_services/authentication.service';

const MODULES = [
  //CommonModule,
  HttpModule,
  RouterModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
  // put shared components here
];

const SERVICES = [
  ClientService,
  ScheduleService,
  AuthGuard,
  AuthenticationService
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ]
})
export class CommonModule { }
