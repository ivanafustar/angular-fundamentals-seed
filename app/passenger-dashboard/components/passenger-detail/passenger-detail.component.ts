import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <!--<span class="status" [class.checked]="detail.checkedIn"></span>-->
      <span class="status" [ngClass]="{'checked': detail.checkedIn}"></span>
      <div *ngIf="editing">
        <input
          #name
          type="text"
          [value]="detail.fullName"
          (input)="onNameChange(name.value)"
        >
      </div>
      <div *ngIf="!editing">
        {{ detail.fullName }}
      </div>
      <div>
        children:
        {{ detail.children?.length || 0}}
      </div>
      <p>
        Checked in date: {{detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd') : 'not checked in'}}
      </p>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {
  }

  toggleEdit = () => {
    if (this.editing) {
      this.edit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  onRemove = () => {
    this.remove.emit(this.detail)
  }

  onNameChange = (value: string) => {
    this.detail.fullName = value;
  }
}
