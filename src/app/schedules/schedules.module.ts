import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SchedulesComponent } from './schedules.component';
import { SchedulesRoutingModule } from './schedules-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SchedulesRoutingModule
  ],
  declarations: [
    SchedulesComponent
  ]
})
export class SchedulesModule { }
