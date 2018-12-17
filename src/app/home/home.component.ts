import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserinfoService} from "../shared/services/userinfo.service";
import { UserInfo } from "../shared/userInfo";
import { AccountInfoService } from "../shared/services/account-info.service";
import { AccountInfo } from "../shared/account_info";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userinfo: UserInfo;
  checkingInfo: AccountInfo;
  savingInfo: AccountInfo;

  constructor(private userinfoService: UserinfoService,
              private router: Router,
              private accountInfoService: AccountInfoService
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
  }

}
