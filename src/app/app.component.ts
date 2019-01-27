import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { LogService } from '@services/log.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LogService]
})
export class AppComponent {
  userName = 'Ruslan';
  name = 'Bob';
  title = 'my project';
  public isHomePage: boolean;

  private routeSubscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.routeSubscription = activatedRoute.url.subscribe(url => {
      if (url[0].path === '') {
        this.isHomePage = true;
      } else {
        this.isHomePage = false;
      }
      console.log(this.isHomePage);
    });
  }

  @ViewChild('clickTitle', {read: ElementRef}) clickTitle: ElementRef;

  /*ngAfterViewInit(): void {
    console.log('this.clickTitle.nativeElement.textContent: ', this.clickTitle.nativeElement.textContent);
  }*/

  public navigateTo(param): void {
    this.router.navigate([param]);
  }
}
