import { Component, OnInit } from '@angular/core';
import { AuthService} from "../shared/services/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-open-an-account',
  templateUrl: './open-an-account.component.html',
  styleUrls: ['./open-an-account.component.scss']
})
export class OpenAnAccountComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      userId: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }
  register(user) {
    user = {username: this.registerForm.value.userId,
          password: this.registerForm.value.password};
    this.authService.register(user)
      .subscribe((res) => {
        if(res.success){
          this.router.navigate(['/login']);
        }
      });
  }

}
