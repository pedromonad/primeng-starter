import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NoContentComponent } from './no-content.component';
import { NoContentRoutingModule } from './no-content-routing.module';

@NgModule({
  imports: [
    SharedModule,
    NoContentRoutingModule
  ],
  declarations: [
    NoContentComponent
  ]
})
export class NoContentModule { }
