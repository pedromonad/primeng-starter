import { NgModule } from '@angular/core';

import { CommonModule } from '../common/common.module';
import { NoContentComponent } from './no-content.component';
import { NoContentRoutingModule } from './no-content-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NoContentRoutingModule
  ],
  declarations: [
    NoContentComponent
  ]
})
export class NoContentModule { }
