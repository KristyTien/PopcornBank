import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AccountInfo } from "../account_info";
import { AppConfig } from "./app.config";

@Injectable()
export class AccountInfoService {
  private cheking_info_url = AppConfig.API_URL + "/checking_account_info";
  private saving_info_url = AppConfig.API_URL + "/saving_account_info";

  constructor(private http: Http) { }

  getCheckingInfo(): Observable<AccountInfo> {
    return this.http.get(this.cheking_info_url, { withCredentials: true})
      .map(res => res.json() as AccountInfo);
  }
  getSavingInfo(): Observable<AccountInfo> {
    return this.http.get(this.saving_info_url, { withCredentials: true})
      .map(res => res.json() as AccountInfo);
  }
}
