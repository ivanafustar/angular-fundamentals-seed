import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <passenger-count
      [items]="passengers"
    >
    </passenger-count>
    <passenger-detail
      *ngFor="let passenger of passengers"
      [detail]="passenger"
    >
    </passenger-detail>
    <div>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">

        </li>
      </ul>
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
      fullName: 'N. N.',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{ age: 6, name: 'Darren' }]
    }, {
      id: 2,
      fullName: 'I. N.',
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
}
