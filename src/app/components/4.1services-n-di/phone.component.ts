import { Component, OnInit} from '@angular/core';
import {DataService} from '@services/data.service';
import {Phone} from './phone';

@Component({
    selector: 'pre-phone',
    templateUrl: './phone.component.html',
    providers: [DataService]
})
export class PhoneComponent implements OnInit {
    items: Phone[] = [];
    constructor(private dataService: DataService){}

    addItem(name: string, price: number){
        this.dataService.addData(name, price);
    }

    ngOnInit(){
        this.items = this.dataService.getData();
    }
}