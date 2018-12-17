import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./shared/services/auth.service";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Banking with popcorn Bank';
  constructor(
    private router: Router,
    public authService: AuthService,
    private slimLoadingBarService: SlimLoadingBarService
  ) { }

  openAnAccount(){
    this.router.navigate(['/openAnAccount_step1']);
  }
  logOut(){
    this.authService.logout();
    this.router.navigate(['/test_login'])
  }

  startLoading() {
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });
  }

  stopLoading() {
    this.slimLoadingBarService.stop();
  }

  completeLoading() {
    this.slimLoadingBarService.complete();
  }
}
