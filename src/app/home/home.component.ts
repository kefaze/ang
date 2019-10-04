import { Component, OnInit, ViewChild } from '@angular/core';

import { LoginGuard } from '../loginGuard/login.guard'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public toChildStr: string = '我是父组件中的值'

  constructor( private loginGuard: LoginGuard ) { 

  }

  @ViewChild('login', null) loginComponent: any

  public msg: string
  onReciveChildMsg(e) {
    alert(e.num)
    e.num = 2
    // e = "456"
    // this.msg = e
  }

  userChildMethod() {
    // 调用子组件方法
    this.loginComponent.loginIn()
  }
  loginIn() {
    alert("登录")
    this.loginGuard.login()
  }

  loginOut() {
    alert("退出")
    this.loginGuard.loginOut()
  }

  public showDom: boolean = true

  @ViewChild('myDom', null) myDom: any

  ngOnInit() {
	console.log(this.myDom, "00000")
	this.myDom.nativeElement.style.width= '100px'
	this.myDom.nativeElement.style.height= '100px'
	this.myDom.nativeElement.style.backgroundColor= 'pink'


    // 组件和指令加载完成， 并不是 DOM 加载完成 
	// 在此处用原生 js 获取 ngIf 隐藏的 DOM 获取不到
	// let dom1 = document.getElementById('dom1')
	// console.log(dom1)
	// dom1.style.color = 'blue'

	/* 获取不到 */
	// let dom2 = document.getElementById('dom2')
	// console.log(dom2)
	// dom2.style.color = 'blue'
  }

  ngAfterViewInit(): void {
    // DOM 加载完成的生命周期函数， 在此处获取 DOM
	let dom2: any = document.getElementById('dom2')
	console.log(dom2)
	dom2.style.color = 'blue'

    
  }

  fatherMethod() {
    alert("我是父组件的方法")
  }

}
