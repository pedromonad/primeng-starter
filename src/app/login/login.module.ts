import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '../common/common.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    CommonModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
