import { Injectable } from '@angular/core';

@Injectable()
export class AccountGenerationService {
  public checking_account: String;
  public saving_account: String;
  constructor() { }

  newCheckingAccount(){
    this.checking_account = String(Math.round(Math.random() * 1000000000));
    while (this.checking_account.length < 10){
      this.checking_account = "0" + this.checking_account;
    }
    return this.checking_account;
  }
  newSavingAccount(){
    this.saving_account = String(Math.round(Math.random() * 1000000000));
    while (this.saving_account.length < 10){
      this.saving_account = "0" + this.saving_account;
    }
    return this.saving_account;
  }
}
