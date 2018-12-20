import {Injectable} from '@angular/core';
import {Phone} from '../components/4.1services-n-di/phone';
import {LogService} from '@services/log.service';


@Injectable()
export class DataService{
    private data: Phone[] = [
        { name:"Apple iPhone 7", price: 57000},
        { name: "HP Elite x3", price: 56000},
        { name: "Alcatel Idol S4", price: 25000}
    ];
    constructor(private logService: LogService){}
    getData(): Phone[] {
        this.logService.write('Phones was getted!');
        return this.data;
    }

    addData(name: string, price: number){
        this.data.push(new Phone(name, price));
    }
}