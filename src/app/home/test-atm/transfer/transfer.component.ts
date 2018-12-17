import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AtmService } from "../../../shared/services/atm.service";
import { UserInfo} from "../../../shared/userInfo";
import { UserinfoService} from "../../../shared/services/userinfo.service";
import { AccountInfoService } from "../../../shared/services/account-info.service";
import { AccountInfo } from "../../../shared/account_info";
import { Transfer } from "../../../shared/transfer";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  userinfo: UserInfo;
  transferForm: FormGroup;
  t: Transfer;
  success: boolean;
  checkingInfo: AccountInfo;
  savingInfo: AccountInfo;
  over: boolean;

  constructor(
    private userinfoService: UserinfoService,
    private atmService: AtmService,
    private accountInfoService: AccountInfoService
  ) { }

  get fromaccount() { return this.transferForm.get('fromaccount'); }
  get amount() { return this.transferForm.get('amount'); }

  ngOnInit() {

    this.userinfoService.getUserInfo()
      .subscribe((userinfo: UserInfo) => {
        this.userinfo = userinfo;
      });

    this.transferForm = new FormGroup({
      fromaccount: new FormControl(),
      toaccount: new FormControl(),
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
  }
  transfer(){
    this.t = this.transferForm.value;
    console.log(this.t);
    this.atmService.post_transfer(this.t)
      .subscribe((res) => {if (res.success) { console.log(res); this.success = true; }});
  }

}
