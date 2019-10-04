import { Injectable } from '@angular/core';
import { promise } from 'protractor';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getData() {
    setTimeout(() => {
      var userName = "ABC"
      return userName
    }, 1000);
  }

  getCallData(cb) {
    setTimeout(() => {
      var userName = "ABC"
      cb && cb(userName)
    }, 1000);
  }

  getPromiseData() {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        var userName = "promise-data"
        resolve(userName)
      }, 1000);
    })
  }

  getRxjsData() {
    return new Observable((observer)=>{
      setTimeout(() => {
        var userName = "RXJS-data"
        observer.next(userName)
        // observer.error()
      }, 3000);
      
    })
  }

  // 多次执行 promise
  getPromiseIntervalData() {
    return new Promise((resolve, reject)=>{
      setInterval(() => {
        var userName = "promise-data-interval"
        resolve(userName)
      }, 1000);
    })
  }
  // 多次执行 rxjs
  getRxjsIntervalData() {
    return new Observable((observer)=>{
      setInterval(() => {
        var userName = "RXJS-data-interval"
        observer.next(userName)
      }, 1000);
      
    })
  }

  // rxjs 提供的工具方法 filter
  getRxjsUtilsData() {
    let count = 0
    return new Observable((observer)=>{
      setInterval(() => {
        count++
        observer.next(count)
      }, 1000);
    })
  }

}
