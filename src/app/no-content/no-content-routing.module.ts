import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoContentComponent } from './no-content.component';
import { AuthGuard } from '../common/_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '**', component: NoContentComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class NoContentRoutingModule { }
