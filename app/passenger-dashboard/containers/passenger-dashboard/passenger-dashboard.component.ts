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
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data)
  }

  handleRemove = (ev: Passenger) => {
    this.passengerService
      .removePassenger(ev)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((p: Passenger) => {
          return p.id !== ev.id;
        })
      })
  }

  handleEdit = (ev: Passenger) => {
    this.passengerService
      .updatePassenger(ev)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((p: Passenger) => {
          if (p.id === data.id) {
            console.log(data)
            console.log(ev)
            p = Object.assign(p, data)
          }
          return p;
        })
      })
  }
}
