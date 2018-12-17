import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppConfig } from "./app.config";
import {Withdraw } from "../withdraw";
import { Deposit } from "../deposit";
import {Transfer } from "../transfer";


@Injectable()
export class AtmService {
  private withdraw_url = AppConfig.API_URL + "/withdraw";
  private deposit_url = AppConfig.API_URL + "/deposit";
  private transfer_url = AppConfig.API_URL + "/transfer";

  constructor(private http: Http) { }

  post_withdraw( w: Withdraw){
    return this.http.post(this.withdraw_url , w)
      .map(res => res.json())
      .catch((error:any) => {return Observable.throw(error.json() || 'Server error');
      });
  }
  post_deposit(d: Deposit){
    return this.http.post(this.deposit_url , d)
      .map(res => res.json())
      .catch((error:any) => {return Observable.throw(error.json() || 'Server error');
      });
  }
  post_transfer(t: Transfer){
    return this.http.post(this.transfer_url , t)
      .map(res => res.json())
      .catch((error:any) => {return Observable.throw(error.json() || 'Server error');
      });
  }

}
