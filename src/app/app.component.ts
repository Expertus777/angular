import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {LogService} from '@services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LogService]
})
export class AppComponent {
  userName = 'Ruslan';

  name = 'Bob';
  age = 27;

  title = 'my project';

  counter = 0;
  clicks = 0;

  @ViewChild('clickTitle', {read: ElementRef}) clickTitle: ElementRef;

  increase($event): void {
    this.counter++;
    console.log($event);
  }

  public onCorrelation(value) {
    value.increased === true ? this.clicks++ : this.clicks--;
    if (value.e.ctrlKey === true && value.increased) {
      this.clickTitle.nativeElement.style = 'color: red';
      this.clicks += 10;
    } else if (value.e.ctrlKey === true && !value.increased) {
      this.clickTitle.nativeElement.style = 'color: lightblue';
      this.clicks -= 10;
    } else {
      this.clickTitle.nativeElement.style = 'color: black';
    }
  }

  public resetTitle() {
    console.log('RESET TITLE');
    this.clickTitle.nativeElement.textContent = 'RESET';
  }

  /*ngAfterViewInit(): void {
    console.log('this.clickTitle.nativeElement.textContent: ', this.clickTitle.nativeElement.textContent);
  }*/
}
