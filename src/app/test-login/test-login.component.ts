import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";


@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.component.html',
  styleUrls: ['./test-login.component.scss']
})

export class TestLoginComponent implements OnInit {
  userForm: FormGroup;
  user;
  userNameNotExistOrWrongPassword = false;

  constructor(
    private authService: AuthService, // inject
    private router: Router,
    private slimLoadingBarService: SlimLoadingBarService
  ) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      userId: new FormControl('',  Validators.required ),
      password: new FormControl('',  Validators.required )
    });

  }
  get userId() { return this.userForm.get('userId'); }
  get password() { return  this.userForm.get('password');}

  login() {
    this.slimLoadingBarService.start();
    this.authService.login(this.userForm.value.userId, this.userForm.value.password)
      .subscribe((res) => {
        console.log(res);
        if(res.success){
          this.slimLoadingBarService.complete();
           this.router.navigate(['/user_home']);
        }else{
          console.log('hello this is login falied');
          this.userNameNotExistOrWrongPassword = true;
          this.slimLoadingBarService.complete();
        }
      }
        );
  }

}
