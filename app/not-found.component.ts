import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      404 Not found, go <a routerLink="/">home</a>?
    </div>`
})
export class NotFoundComponent {

}
