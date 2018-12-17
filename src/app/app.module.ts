import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestLoginComponent } from './test-login/test-login.component';
import { SignOnComponent } from './sign-on/sign-on.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppGuard } from './app.guard';
import { TestPageComponent } from './test-page/test-page.component';
import { Step1Component } from './open-an-account/step1/step1.component';
import { Step2Component } from './open-an-account/step2/step2.component';
import { Step3Component } from './open-an-account/step3/step3.component';
import { OpenAnAccountComponent } from './open-an-account/open-an-account.component';
import { Step4Component } from './open-an-account/step4/step4.component';

import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { CheckingAccountComponent } from './home/checking-account/checking-account.component';
import { SavingAccountComponent } from './home/saving-account/saving-account.component';
import { StatementComponent } from './home/statement/statement.component';

import { TestAtmComponent } from './home/test-atm/test-atm.component';
import { WithdrawComponent } from './home/test-atm/withdraw/withdraw.component';
import { DepositComponent } from './home/test-atm/deposit/deposit.component';
import { TransferComponent } from './home/test-atm/transfer/transfer.component';

import { AuthService } from './shared/services/auth.service';
import { UserinfoService} from "./shared/services/userinfo.service";
import { AccountGenerationService } from "./shared/services/account-generation.service";
import { AccountInfoService } from "./shared/services/account-info.service";
import { AccountActivityService } from "./shared/services/account-activity.service";
import { AtmService } from "./shared/services/atm.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestLoginComponent,
    SignOnComponent,
    TestPageComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    OpenAnAccountComponent,
    Step4Component,
    CheckingAccountComponent,
    SavingAccountComponent,
    StatementComponent,
    TestAtmComponent,
    WithdrawComponent,
    DepositComponent,
    TransferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [
    AuthService,
    UserinfoService,
    FormBuilder,
    AppGuard,
    AccountGenerationService,
    AccountInfoService,
    AccountActivityService,
    AtmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
