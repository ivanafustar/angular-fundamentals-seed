import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
    this.passengers = [{
      id: 1,
      fullName: 'Nick Jackelson',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{ age: 6, name: 'Darren' }]
    }, {
      id: 2,
      fullName: 'Jack Nickelson',
      checkedIn: false,
    }, {
      id: 3,
      fullName: 'N. I.',
      checkedIn: true,
    }, {
      id: 4,
      fullName: 'N. N.',
      checkedIn: false,
    }, {
      id: 5,
      fullName: 'I. I.',
      checkedIn: false,
    }
    ]
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
    console.log(this.passengers)
  }
}
