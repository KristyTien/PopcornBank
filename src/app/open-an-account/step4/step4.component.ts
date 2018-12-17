import { Component, OnInit } from '@angular/core';
import { UserInfo} from "../../shared/userInfo";
import {UserinfoService } from "../../shared/services/userinfo.service";

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {
  userinfo: UserInfo;
  constructor(private userinfoService: UserinfoService) { }

  ngOnInit() {
    this.userinfoService.getUserInfo().subscribe((userinfo: UserInfo) => {
      this.userinfo = userinfo;
      //console.log(this.userinfo);
    });
  }

}
