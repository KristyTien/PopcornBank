import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserInfo } from "../userInfo";
import { AppConfig } from "./app.config";


@Injectable()
export class UserinfoService {
  private userinfoURL = AppConfig.API_URL + "/user_info";
  //private userinfoURL = 'http://localhost:8080/user_info';

  constructor(private http: Http) { }

  getUserInfo(): Observable<UserInfo> {
    return this.http.get(this.userinfoURL, { withCredentials: true})
      .map(res => res.json() as UserInfo);
  }

  addUserInfo(userinfo: UserInfo) {
    return this.http.post(this.userinfoURL, userinfo, { withCredentials: true})
      .map(res => res.json());
  }
  sendsuccessmail() {
    return this.http.get(AppConfig.API_URL + "/register_success_mail", { withCredentials: true})
      .map(res => res.json());
  }
}
