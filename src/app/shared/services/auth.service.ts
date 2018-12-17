import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, URLSearchParams } from '@angular/http';
import { AppConfig } from "./app.config";
// subject inherits observable and observer.
// BehaviorSubject is special subject which has initial value and will emit last value to new subscribers
@Injectable()
export class AuthService {
  // public loggedIn: boolean = false;
  public loggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private authUrl= AppConfig.API_URL;
  public user;
  public logResult;

  constructor(private http: Http) { }

  login(userId, password) {
    const params = new URLSearchParams();

    params.set('username', userId);
    params.set('password', password);
    //console.log('authservice:', params);
    return this.http.post(this.authUrl + '/login', params, { withCredentials: true})
      .map(res => res.json())
      .map((res) => {
        this.loggedIn.next(res.success);
        return res;
      })
      ;

  }
  logout() {
    console.log('guard logout');
    this.loggedIn.next(false);
  }
  register(user){
    return this.http.post(this.authUrl + "/register", user)
      .map(res => res.json())
      .catch((error:any) => {return Observable.throw(error.json() || 'Server error');
    });
  }

}
