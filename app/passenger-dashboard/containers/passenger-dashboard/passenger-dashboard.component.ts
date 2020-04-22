import { Component } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <!--<span class="status" [class.checked]="passenger.checkedIn"></span>-->
          <span class="status" [ngClass]="{'checked': passenger.checkedIn}"></span>
          {{i}}: {{passenger.fullName}}
          children:
          {{ passenger.children?.length || 0}}
          <p>
            Checked in date: {{passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMd') : 'not checked in'}}
          </p>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullName: 'N. N.',
    checkedIn: true,
    checkInDate: 1516446848,
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
