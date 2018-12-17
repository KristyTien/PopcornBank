import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AtmService } from "../../../shared/services/atm.service";
import { Deposit } from "../../../shared/deposit";
import { UserInfo} from "../../../shared/userInfo";
import { UserinfoService} from "../../../shared/services/userinfo.service";
import { AccountInfoService } from "../../../shared/services/account-info.service";
import { AccountInfo } from "../../../shared/account_info";


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  userinfo: UserInfo;
  depositForm: FormGroup;
  d: Deposit;
  success: boolean;
  checkingInfo: AccountInfo;
  savingInfo: AccountInfo;

  constructor(
    private userinfoService: UserinfoService,
    private atmService: AtmService,
    private accountInfoService: AccountInfoService
  ) { }
  get accountnumber() { return this.depositForm.get('accountnumber'); }

  ngOnInit() {

    this.depositForm = new FormGroup({
      accountnumber: new FormControl(),
      amount: new FormControl()
    });

    this.userinfoService.getUserInfo()
      .subscribe((userinfo: UserInfo) => {
        console.log(userinfo)
        this.userinfo = userinfo;
      });

    this.accountInfoService.getCheckingInfo()
      .subscribe((checkingInfo: AccountInfo) => {
        this.checkingInfo = checkingInfo;
      });
    this.accountInfoService.getSavingInfo()
      .subscribe((savingInfo: AccountInfo) => {
        this.savingInfo = savingInfo;
      });
  }

  deposit(){
    this.d = this.depositForm.value;
    this.atmService.post_deposit(this.d)
      .subscribe((res) => {
      if (res.success) { console.log(res); this.success = true; }});
  }

}
