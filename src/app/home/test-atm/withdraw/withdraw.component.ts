import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AtmService } from "../../../shared/services/atm.service";
import { Withdraw } from "../../../shared/withdraw";
import { UserInfo} from "../../../shared/userInfo";
import { UserinfoService} from "../../../shared/services/userinfo.service";
import { AccountInfoService } from "../../../shared/services/account-info.service";
import { AccountInfo } from "../../../shared/account_info";

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  userinfo: UserInfo;
  withdrawForm: FormGroup;
  w: Withdraw;
  success: boolean;
  checkingInfo: AccountInfo;
  savingInfo: AccountInfo;
  over: boolean;
  constructor(
    private userinfoService: UserinfoService,
    private atmService: AtmService,
    private accountInfoService: AccountInfoService
  ) { }

  get accountnumber() { return this.withdrawForm.get('accountnumber'); }
  get amount() { return this.withdrawForm.get('amount'); }

  ngOnInit() {
    this.userinfoService.getUserInfo()
      .subscribe((userinfo: UserInfo) => {
        this.userinfo = userinfo;
      });

    this.withdrawForm = new FormGroup({
      accountnumber: new FormControl(),
      amount: new FormControl()
    });

    this.accountInfoService.getCheckingInfo()
      .subscribe((checkingInfo: AccountInfo) => {
        this.checkingInfo = checkingInfo;
      });
    this.accountInfoService.getSavingInfo()
      .subscribe((savingInfo: AccountInfo) => {
        this.savingInfo = savingInfo;
      });

    // this.over = (this.amount.value > this.checkingInfo.balance);

  }
  withdraw(){
    this.w = this.withdrawForm.value;
    this.atmService.post_withdraw(this.w)
      .subscribe((res) => {if (res.success){ console.log(res); this.success = true; }});
  }
  checkbalance(){
    this.over = false;
    if (this.accountnumber.value === this.savingInfo.accountnumber && this.amount.value > this.savingInfo.balance){
      this.over = true;
    }else if (this.accountnumber.value === this.checkingInfo.accountnumber && this.amount.value > this.checkingInfo.balance){
      this.over = true;
    }
  }

}
