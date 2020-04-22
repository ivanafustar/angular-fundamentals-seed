import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent
  ],
  exports: [
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PassengerDashboardModule {

}
