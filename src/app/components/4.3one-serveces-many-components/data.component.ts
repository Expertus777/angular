import { Component, OnInit} from '@angular/core';
import { DataService } from '@services/data.service';
import { LogService } from '@services/log.service';
import { Phone } from '../4.1services-n-di/phone';

@Component({
  selector: 'data-component',
  templateUrl: './data-component.html'
})

export class DataComponent implements OnInit {
  items: Phone[] = [];

  constructor(private dataServices: DataService){}

  addItem(name: string, price: number): void {
    this.dataServices.addData(name, price);
    console.log('yes!2')
  }

  ngOnInit() {
    this.items = this.dataServices.getData();
  }
}