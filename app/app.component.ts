import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <!--
      Hello!
      <button (click)="handleClick(refInput.value)">Get value</button>
      <input #refInput type="text" (input)="handleChange(refInput.value)">
      <div *ngIf="refInput.value.length">Searching for ... {{something}}</div>
      -->
      <!--      <passenger-dashboard></passenger-dashboard>-->
      <passenger-viewer></passenger-viewer>
    </div>
  `
})

export class AppComponent {
  // something: string = '';
  //
  // handleChange = (value) => {
  //   console.log(value)
  //   this.something = value;
  // }
  //
  // handleClick = (value) => {
  //   console.log(value)
  // }


}

