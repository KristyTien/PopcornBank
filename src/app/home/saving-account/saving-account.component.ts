import { Component, OnInit } from '@angular/core';
import { AccountInfoService } from "../../shared/services/account-info.service";
import { AccountInfo } from "../../shared/account_info";
import { AccountActivityService } from "../../shared/services/account-activity.service";
import { AccountActivity } from "../../shared/account_activity";


@Component({
  selector: 'app-saving-account',
  templateUrl: './saving-account.component.html',
  styleUrls: ['./saving-account.component.scss']
})
export class SavingAccountComponent implements OnInit {
  savingInfo: AccountInfo;
  savingActivity: AccountActivity[];

  constructor(
    private accountInfoService: AccountInfoService,
    private accountActivityService: AccountActivityService
  ) { }

  ngOnInit() {
    this.accountInfoService.getSavingInfo()
      .subscribe((savingInfo: AccountInfo) => {
        this.savingInfo = savingInfo;
      });

    this.accountActivityService.getSavingActivity()
      .subscribe((savingActivity: AccountActivity[]) => {
        savingActivity.forEach(sa =>{
          let date = new Date(sa.timeStamp);
          sa.timeStamp = `${date.getFullYear()} - ${date.getMonth()+1} - ${date.getDate()} `
        });
        this.savingActivity = savingActivity;
      });
  }

}


