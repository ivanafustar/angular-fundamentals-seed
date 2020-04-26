import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  templateUrl: 'passenger-form.component.html'
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>(); //we emit Passenger object, and we pass the type to the instance of the event Emitter

  baggage: Baggage[] = [{
    key: 'none',
    value: 'no baggage'
  }, {
    key: 'hand-only',
    value: 'hand baggage'
  }, {
    key: 'hold-only',
    value: 'hold baggage'
  }, {
    key: 'hold-hand',
    value: 'hand and hold baggage'
  }]

  handleSubmit = (value: Passenger, isValid: boolean) => {
    if (isValid) {
      this.update.emit(value)
    }
  }

  toggleCheckIn = (checkedIn: boolean) => {
    if (checkedIn) {
      this.detail.checkInDate = Date.now(); //ms
    }
  }
}
