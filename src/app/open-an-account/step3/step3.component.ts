import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { UserinfoService } from "../../shared/services/userinfo.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import {UserInfo} from "../../shared/userInfo";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  userInfoForm: FormGroup;
  userInfo: UserInfo;


  constructor(
    // private authService: AuthService, // inject
    private router: Router,
    private userInfoService: UserinfoService,
    private slimLoadingBarService: SlimLoadingBarService
  ) {
    this.userInfoForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl('', Validators.required),
      city: new FormControl(''),
      state:  new FormControl(''),
      zipcode:  new FormControl('')
    });
  }
  get email() { return this.userInfoForm.get('email'); }

  ngOnInit() {
  }
  addUserInfo() {
    this.slimLoadingBarService.start();
    this.userInfo = this.userInfoForm.value;
    //console.log(this.userInfo);
    this.userInfoService.addUserInfo(this.userInfo).subscribe((res) => {
      if (res.success) {
        //console.log("sending mail");
        this.slimLoadingBarService.complete();
        this.router.navigate(['/openAnAccount_step4']);
      }
    });

  }

}
