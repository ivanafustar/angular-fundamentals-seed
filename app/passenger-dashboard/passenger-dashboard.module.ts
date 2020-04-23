import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  exports: [
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PassengerDashboardModule {

}
