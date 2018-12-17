import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestLoginComponent } from './test-login/test-login.component';
import { HomeComponent } from './home/home.component';
import { AppGuard } from "./app.guard";
import { OpenAnAccountComponent } from './open-an-account/open-an-account.component';
import { Step1Component } from "./open-an-account/step1/step1.component";
import { Step2Component } from "./open-an-account/step2/step2.component";
import { Step3Component } from "./open-an-account/step3/step3.component";
import { Step4Component } from "./open-an-account/step4/step4.component";
import { StatementComponent } from "./home/statement/statement.component";
import { CheckingAccountComponent } from "./home/checking-account/checking-account.component";
import { SavingAccountComponent } from "./home/saving-account/saving-account.component";
import { TestAtmComponent } from "./home/test-atm/test-atm.component";
import { DepositComponent } from "./home/test-atm/deposit/deposit.component";
import { WithdrawComponent } from "./home/test-atm/withdraw/withdraw.component";
import { TransferComponent } from "./home/test-atm/transfer/transfer.component";

const routes: Routes = [
  { path: '',
    canActivate: [AppGuard],
    children:[
      { path: 'user_home',
        component: HomeComponent},
      { path: 'openAnAccount_step3',
        component: Step3Component },
      { path: 'openAnAccount_step4',
        component: Step4Component },
      { path: 'checking_account',
        component: CheckingAccountComponent },
      { path: 'saving_account',
        component: SavingAccountComponent },
      { path: 'statement',
        component: StatementComponent},
      { path: 'withdraw',
        component: WithdrawComponent },
      { path: 'deposit',
        component: DepositComponent },
      { path: 'transfer',
        component: TransferComponent },
    ]
  },
  { path: 'login',
    component: TestLoginComponent },
  { path: 'test_login',
    component: TestLoginComponent },
  { path: 'openAnAccount_step1',
    component: Step1Component },
  { path: 'openAnAccount_step2',
    component: Step2Component },
  { path: 'openAnAccount',
    component: OpenAnAccountComponent },
  { path: 'test_atm',
    component: TestAtmComponent },
  { path: '',
    component: TestLoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
