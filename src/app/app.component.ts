import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Bob';
  age = 27;

  title = 'Angular';

  counter = 0;
  increase($event): void {
    this.counter++;
    console.log($event);
  }
}
