import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UsersServerResponse } from './user';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss']
})

export class HttpClientComponent implements OnInit {
  public user: User = new User();
  public receivedUser: User;

  public users: User[] = [];
  public error: any;
  public  num: number;

  public factorial: number;
  public done = false;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    // this.http.get('/assets/user.json').subscribe((data: User) => this.user = data);
    this.userService.getUsers().subscribe(
      (users: User[]) => this.users = users,
      (error: any) => { this.error = error.message; console.error('Error: ', error) }
     );
  }

  /*submit(num: number) {
    this.userService.getFactorial(num).subscribe((data: number) => {
      this.factorial = data; this.done = true;
    });
  }*/

  public sendUser(user: User): any {
    this.userService.postData(user).subscribe(
      (data: User) => { this.receivedUser = data; this.done = true; },
      error => console.error(error.message)
    );
  }
}
