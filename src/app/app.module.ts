import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ClientsModule } from './clients/clients.module';
import { SchedulesModule } from './schedules/schedules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    ClientsModule,
    SchedulesModule,
    LoginModule
  ],
  providers: [
  ]
})
export class AppModule { }
