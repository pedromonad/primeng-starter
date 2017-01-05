import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { CommonModule } from '../common/common.module';

@NgModule({
  imports: [
    ClientsRoutingModule,
    CommonModule
  ],
  declarations: [
    ClientsComponent
  ]
})
export class ClientsModule { }
