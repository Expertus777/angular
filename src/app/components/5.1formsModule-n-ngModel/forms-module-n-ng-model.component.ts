import { Component } from '@angular/core'

export class Phone {
  constructor(public title: string,
              public price: number,
              public company: string) { }
}

@Component({
  selector: 'app-phone',
  templateUrl: './forms-module-n-ng-model.component.html'
})

export class Phone51Component {
  public phone: Phone = new Phone('', null, '');

  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Samsung", "Motorola", "Alcatel"];

  addPhone(title: string, price: number, company: string) {
    this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
    console.log('this.phones: ', this.phones);

    this.consolePhone(title, price, company);
  }

  consolePhone(title: any, price: any, comp: any) {
    console.log(title);
    console.log(price);
    console.log(comp);
  }

  public onTitleChange(element?: any): void {
    if(this.phone.title == 'no') {
      this.phone.title = 'undefined'
    }
  }

  console(value: any): void {
    console.log(value);
  }
}