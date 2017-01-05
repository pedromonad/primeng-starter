import { NgModule } from '@angular/core';
import { ScheduleModule } from 'primeng/primeng';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DialogModule } from 'primeng/primeng';
import { InputTextModule, InputMaskModule, CheckboxModule } from 'primeng/primeng';
import { CommonModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    
    DialogModule,
    HomeRoutingModule,
    ScheduleModule,
    InputTextModule,
    InputMaskModule,
    CheckboxModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
