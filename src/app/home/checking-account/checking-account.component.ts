import { Component, OnInit } from '@angular/core';
import { AccountInfoService } from "../../shared/services/account-info.service";
import { AccountInfo } from "../../shared/account_info";
import { AccountActivityService } from "../../shared/services/account-activity.service";
import { AccountActivity } from "../../shared/account_activity";


@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.scss']
})
export class CheckingAccountComponent implements OnInit {
  checkingInfo: AccountInfo;
  checkingActivity: AccountActivity[];
  constructor(
    private accountInfoService: AccountInfoService,
    private accountActivityService: AccountActivityService
  ) { }

  ngOnInit(){
  this.accountInfoService.getCheckingInfo()
    .subscribe((checkingInfo: AccountInfo) => {
      this.checkingInfo = checkingInfo;
      //console.log('get checking info');
      //console.log(this.checkingInfo);
    });
  this.accountActivityService.getCheckingActivity()
    .subscribe((checkingActivity: AccountActivity[]) => {
      checkingActivity.forEach(ca =>{
        let date = new Date(ca.timeStamp);
        ca.timeStamp = `${date.getFullYear()} - ${date.getMonth()+1} - ${date.getDate()} `
      });
      this.checkingActivity = checkingActivity;
    });
  }

}
