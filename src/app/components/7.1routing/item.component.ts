import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-item-info',
  template: `
    <h3>Model: {{id}}</h3>
    <div>Good: {{product}}</div>
    <div>Price: {{price}}</div>
    <a routerLink="details">Show Details</a>
    <a routerLink="stat">Statistic</a>
    <router-outlet></router-outlet>
    <br><br>
  `
})

export class ItemComponent {
  public id: number;
  public product: string;
  public price: string;

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    // this.id = activateRoute.snapshot.params['id'];
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product'];
        this.price = queryParam['price'];
      }
    );
    // console.log('activateRoute: ', activateRoute);
    // console.log('activateRoute.params: ', activateRoute.params);
  }
}
