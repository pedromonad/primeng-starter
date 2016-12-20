import { NgModule } from '@angular/core';
import { ScheduleModule } from 'primeng/primeng';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DialogModule } from 'primeng/primeng';
import { InputTextModule, InputMaskModule, CheckboxModule } from 'primeng/primeng';


@NgModule({
  imports: [
    SharedModule,
    DialogModule,
    HomeRoutingModule,
    ScheduleModule,
    InputTextModule,
    InputMaskModule,
    CheckboxModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
