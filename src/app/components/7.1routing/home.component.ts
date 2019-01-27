import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export class Item {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-home-page',
  template: `
    <h3>Home page</h3>
    <h3>Object parameters</h3>
    <div class="form-group">
      <input type="number" [(ngModel)]="item.id" class="form-control" placeholder="Model id">
    </div>
    <div class="form-group">
      <input type="number" [(ngModel)]="item.price" class="form-control" placeholder="Price">
    </div>
    <div class="form-group">
      <input type="text" [(ngModel)]="item.name" class="form-control" placeholder="Good">
    </div>
    <button (click)="goToItem(item)" class="btn btn-default">Go to ...</button>
  `
})

export class HomeComponent {
  public item: Item = new Item();

  public constructor(public router: Router, private toastr: ToastrService) {}

  public goToItem(item: Item): void {
    if (item.id && item.price && item.name) {
      this.router.navigate(['/item', item.id], {
        queryParams: {
          'product': item.name,
          'price': item.price
        }
      });
    } else {
      this.toastr.error('Fields are empty', 'Error:');
      this.toastr.info('Fill all fields', 'Info:');
    }
  }
}
