import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VisitComponent } from './visit.component';
import { AuthGuard } from '../shared/_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'visitas', component: VisitComponent, canActivate: [AuthGuard] },
      { path: 'visitas/:id', component: VisitComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class VisitRoutingModule { }
