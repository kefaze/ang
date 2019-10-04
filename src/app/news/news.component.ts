import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

// 引入服务
import { AxiosService } from '../../service/axios.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public newsList: any[]

  constructor(public http: HttpClient, public $axios: AxiosService) { }

  ngOnInit() {
  }

  axiosGetData() {
    let url = '/search/interface/getrelatequery?word=%E6%99%8B%E6%B1%9F'
    this.$axios.AxiosGet(url).then((data)=>{
      console.log("axios GET 请求: ", data)
    })
  }

  getData() {
    // let url = '/search/interface/getrelatequery?word=%E6%99%8B%E6%B1%9F'
    // this.http.get(url).subscribe((res: any)=>{
    //   console.log("GET 请求", res)
    //   this.newsList = res.data.relateQuery
    // })
    let api = 'http://127.0.0.1:3000/news'
    this.http.get(api).subscribe((res: any)=>{
      console.log("GET 请求", res)
    })
  }

  postData() {
    // let api = '/api/message/readnotice'
    // let requestData = {
    //   advert_id: '212'
    // }
    // let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json'})}
    
    // this.http.post(api, requestData, headerOption).subscribe((res)=>{
    //   console.log("POST请求：", res)
    // })

    let api = 'http://127.0.0.1:3000/dologin'
    let requestData = {
      userName: '212'
    }
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json'})}
    
    this.http.post(api, requestData, headerOption).subscribe((res)=>{
      console.log("POST请求：", res)
    })
  }
  
  /**
   * jsonp 解决跨域
   * 使用 JSONP 格式请求数据的前提是 后台必须支持 jsonp 请求， 请求的 api 中带有 callBack 或者 cb
   */
  getJsonpData() {
    let url = '/search/interface/getrelatequery?word=%E6%99%8B%E6%B1%9F'
    this.http.jsonp(url, 'callback').subscribe((res)=>{
      console.log("JSOP 请求数据", res)
    })
  }

}
