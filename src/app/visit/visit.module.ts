import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { VisitComponent } from './visit.component';
import { VisitRoutingModule } from './visit-routing.module';

@NgModule({
  imports: [
    SharedModule,
    VisitRoutingModule
  ],
  declarations: [
    VisitComponent
  ]
})
export class VisitModule { }
