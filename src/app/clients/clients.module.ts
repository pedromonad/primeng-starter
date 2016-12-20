import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ClientsRoutingModule
  ],
  declarations: [
    ClientsComponent
  ]
})
export class ClientsModule { }
