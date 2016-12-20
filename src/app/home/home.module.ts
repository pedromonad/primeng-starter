import { NgModule } from '@angular/core';
import {ScheduleModule} from 'primeng/primeng';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    ScheduleModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
