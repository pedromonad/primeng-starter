import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SchedulesComponent } from './schedules.component';
import { AuthGuard } from '../common/_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'horarios', component: SchedulesComponent, canActivate: [AuthGuard] },
      { path: 'horarios/:id', component: SchedulesComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class SchedulesRoutingModule { }
