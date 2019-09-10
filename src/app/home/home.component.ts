import { Component, OnInit } from '@angular/core';

import { LoginGuard } from '../loginGuard/login.guard'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private loginGuard: LoginGuard ) { 

  }

  loginIn() {
    alert("登录")
    this.loginGuard.login()
  }

  loginOut() {
    alert("退出")
    this.loginGuard.loginOut()
  }

  ngOnInit() {
  }
}
