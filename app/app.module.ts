import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerViewerComponent } from './passenger-dashboard/containers/passenger-viewer/passenger-viewer.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

// import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
