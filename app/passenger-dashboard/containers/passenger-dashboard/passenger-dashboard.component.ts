import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers"
      >
      </passenger-count>

      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      >
      </passenger-detail>

    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) {
  } //meaning: this.passengerService = PassengerDashboardService;

  ngOnInit() {
    this.passengers = this.passengerService.getPassengers(); //synchronous call
  }

  handleRemove = (ev: Passenger) => {
    this.passengers = this.passengers.filter((p: Passenger) => {
      return p.id !== ev.id;
    })
  }

  handleEdit = (ev: Passenger) => {
    this.passengers = this.passengers.map((p: Passenger) => {
      if (p.id === ev.id) {
        p = Object.assign(p, ev)
      }
      return p;
    })
  }
}
