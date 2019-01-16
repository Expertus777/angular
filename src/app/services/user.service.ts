import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';
import { User, UsersServerResponse } from '@components/6.1httpClient-send-request/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/assets/users.json').pipe(
      map(data => {
        let userList = data['userList'];
        return userList.map((user: User | any) => {
          if (user.userName && user.userAge) {
            return {name: user.userName, age: user.userAge};
          } else {
            return user;
          }
        })
      }),
      catchError(err => {
        return _throw(err);
      })
    );
  }

  public getFactorial(num: number): Observable<number> {
    let url = 'http://dummy-host.example.com/factorial.php'
    return this.http.get<number>(url + '?number=' + num);
  }
}