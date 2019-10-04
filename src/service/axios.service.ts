import { Injectable } from '@angular/core';

import axios from 'axios'

/**
 * 在angular 中引入第三方 http 模块的使用, 以 axios 为例
 * 有两种使用方法：（本文使用Promise简单封装）
 * 一. 直接在要使用请求的组件中 import axios from 'axios', 调用： axios.get/ axios.post ...
 * 二. 封装成服务： 
 *          1. 引入 axios: import axios from 'axios'
 *          2. 用 promise rxjs 回调函数 3 种方式任选其一进行封装
 */

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() { }

  AxiosGet(api) {
    return new Promise((resolve, reject)=>{
      axios.get(api).then((res)=>{
        resolve(res)
      })
    })
  }
}
