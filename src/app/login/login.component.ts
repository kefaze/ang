import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() toChildStr: string
  @Input() fatherMethod:any
  @Input() fatherComponent: any

  @Output() outer:any = new EventEmitter()


  constructor() { }

  ngOnInit() {}

  public msg = "123"
  public obj = {
    num: 1
  }
  sendParent() {
    this.outer.emit(this.obj)
  }

  loginIn() {
    console.log("调用了子组件的方法")
  }

  getFatherComponentMethod() {
    alert(this.toChildStr)
    alert(this.fatherComponent.toChildStr)
    this.fatherComponent.fatherMethod()
    this.fatherMethod()
  }

}
