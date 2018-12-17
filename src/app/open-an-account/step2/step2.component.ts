import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  userForm: FormGroup;
  response;
  registeredUsername;
  constructor(
    private authService: AuthService, // inject
    private router: Router,
    private slimLoadingBarService: SlimLoadingBarService
  ) {

  }

  ngOnInit() {
    this.registeredUsername = sessionStorage.getItem("registered_username");
    this.userForm = new FormGroup({
      userId: new FormControl({value: this.registeredUsername, disabled: true}),
      password: new FormControl('')
    });
  }
  login(){
    this.slimLoadingBarService.start();
    console.log(this.registeredUsername, this.userForm.value.password);
    this.authService.login(this.registeredUsername, this.userForm.value.password)
      .subscribe((res) => {
        this.response = res;
        if(res.success){
          this.slimLoadingBarService.complete();
          this.router.navigate(['/openAnAccount_step3']);
        }
      });
  }

}
