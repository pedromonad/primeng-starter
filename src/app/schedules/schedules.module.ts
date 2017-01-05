import { NgModule } from '@angular/core';
import { SchedulesComponent } from './schedules.component';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { CommonModule } from '../common/common.module';

@NgModule({
  imports: [
    SchedulesRoutingModule,
    CommonModule
  ],
  declarations: [
    SchedulesComponent
  ]
})
export class SchedulesModule { }
