import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ClientsModule } from './clients/clients.module';
import { VisitModule } from './visit/visit.module';
import { ClientService } from './shared/_services/client.service';
import { VisitService } from './shared/_services/visit.service';
import { AuthGuard } from './shared/_guards/auth.guard';
import { AuthenticationService } from './shared/_services/authentication.service';


import { ToolbarModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
    HomeModule,
    ClientsModule,
    VisitModule,
    LoginModule,

    BrowserModule,
    FormsModule,
    ScheduleModule,
    HttpModule,
    ButtonModule,
    MessagesModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    ToolbarModule
  ],
  providers: [
    ClientService,
    VisitService,
    AuthGuard,
    AuthenticationService
  ]
})
export class AppModule { }
