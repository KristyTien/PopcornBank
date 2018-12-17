import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import {FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import { AccountGenerationService } from "../../shared/services/account-generation.service";
import { SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  registerForm: FormGroup;
  registerResult = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private accountGeneration: AccountGenerationService,
    private slimLoadingBarService: SlimLoadingBarService
  ) {
    this.registerForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rePassword: new FormControl('',  Validators.required)
  }); }
  get password() { return this.registerForm.get('password'); }
  get rePassword() { return this.registerForm.get('rePassword'); }

  ngOnInit() {  }

  register(user) {
    this.slimLoadingBarService.start();
    user = {username: this.registerForm.value.userId,
      password: this.registerForm.value.password,
      checking_account: this.accountGeneration.newCheckingAccount(),
      saving_account: this.accountGeneration.newSavingAccount()
    };

    this.authService.register(user)
      .subscribe((res) => {
        console.log(res);
        if (res.success) {
          this.slimLoadingBarService.complete();
          sessionStorage.setItem("registered_username", this.registerForm.value.userId);
          this.router.navigate(['/openAnAccount_step2']);
        }else{
          console.log('registration failed');
          this.registerResult = false;
        }
      },
        (res) => {
      if (res.status === 201) { this.registerResult = false; }
        }
        );
  }

}
