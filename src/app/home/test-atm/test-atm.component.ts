import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-test-atm',
  templateUrl: './test-atm.component.html',
  styleUrls: ['./test-atm.component.scss']
})
export class TestAtmComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goToWithdraw(){
    this.router.navigate(['withdraw']);
  }
  goToDeposit(){
    this.router.navigate(['deposit']);
  }
  goToTransfer(){
    this.router.navigate(['transfer']);
  }

}
