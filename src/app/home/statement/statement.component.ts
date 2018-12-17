import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AccountInfoService } from "../../shared/services/account-info.service";
import { AccountInfo } from "../../shared/account_info";
import { AccountActivityService } from "../../shared/services/account-activity.service";
import { AccountActivity } from "../../shared/account_activity";
import { UserinfoService} from "../../shared/services/userinfo.service";
import { UserInfo } from "../../shared/userInfo";


@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {
  userinfo: UserInfo;
  checkingInfo: AccountInfo;
  checkingActivity: AccountActivity[];
  savingInfo: AccountInfo;
  savingActivity: AccountActivity[];

  constructor(
    private userinfoService: UserinfoService,
    private router: Router,
    private accountInfoService: AccountInfoService,
    private accountActivityService: AccountActivityService
  ) { }

  ngOnInit() {
    this.userinfoService.getUserInfo()
      .subscribe((userinfo: UserInfo) => {
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
    this.accountActivityService.getSavingActivity()
      .subscribe((savingActivity: AccountActivity[]) => {
        this.savingActivity = savingActivity;
        //console.log(this.savingActivity);
      });
    this.accountActivityService.getCheckingActivity()
      .subscribe((checkingActivity: AccountActivity[]) => {
        this.checkingActivity = checkingActivity;
        //console.log(this.checkingActivity);
      });

  }

}
