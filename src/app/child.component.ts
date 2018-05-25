import { Component } from '@angular/core';

// sb pref

@Component({
  selector: 'app-child-component',
  template: `<ng-content></ng-content>
      <h2>Welcome {{name}}!</h2>`,
  styles: [`h2, p {color: red;}`]
})

export class ChildComponent {
  name = 'Ruslan';
}
