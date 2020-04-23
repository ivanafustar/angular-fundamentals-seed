import { Component, Input } from '@angular/core'

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      <!--<span class="status" [class.checked]="passenger.checkedIn"></span>-->
      <span class="status" [ngClass]="{'checked': detail.checkedIn}"></span>
      {{ detail.fullName }}
      children:
      {{ detail.children?.length || 0}}
      <p>
        Checked in date: {{detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd') : 'not checked in'}}
      </p>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  constructor() {
  }
}
