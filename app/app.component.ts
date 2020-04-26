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
      <nav class="nav">
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}"
        >
          Home
        </a>
        <a
          routerLink="/oops"
          routerLinkActive="active"
        >
          Oops
        </a>
      </nav>

      <!-- directive routerLinkActive will add a class active-->
      <!-- directive routerLinkActiveOptions is to make sure that the class only gets added on the exact / route -->


      <router-outlet></router-outlet>
    </div>
  `
})
////router outlet is a placeholer where the components will be injected

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

