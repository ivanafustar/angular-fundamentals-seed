import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { FormsModule } from '@angular/forms';

//service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  //components that we have
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  exports: [
    PassengerDashboardComponent
  ],

  //modules
  imports: [
    CommonModule,
    FormsModule
  ],
  //services that are available to any of the components
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {

}
