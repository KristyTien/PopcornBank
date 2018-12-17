import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppConfig } from "./app.config";
import { AccountActivity } from "../account_activity";

@Injectable()
export class AccountActivityService {
  private cheking_activity_url = AppConfig.API_URL + "/checking_account_activity";
  private saving_activity_url = AppConfig.API_URL + "/saving_account_activity";

  constructor(private http: Http) { }

  getCheckingActivity(): Observable<AccountActivity[]> {
    return this.http.get(this.cheking_activity_url, { withCredentials: true})
      .map(res => res.json() as AccountActivity[]);
  }
  getSavingActivity(): Observable<AccountActivity[]> {
    return this.http.get(this.saving_activity_url, { withCredentials: true})
      .map(res => res.json() as AccountActivity[]);
  }

}
