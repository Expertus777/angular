import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-item-info',
  template: `<h3>Model: {{id}}</h3>`
})

export class ItemComponent {
  public id: number;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    // this.id = activateRoute.snapshot.params['id'];
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    console.log('activateRoute: ', activateRoute);
    console.log('activateRoute.params: ', activateRoute.params);
  }
}
