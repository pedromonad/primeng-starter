import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { AuthGuard } from '../common/_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clientes', component: ClientsComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class ClientsRoutingModule { }
