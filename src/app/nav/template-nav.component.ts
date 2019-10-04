import { Component } from '@angular/core'

import { RequestService } from '../../service/request.service'
import { filter,map } from 'rxjs/operators'

@Component({
    selector: 'template-nav',
    templateUrl: './template-nav.component.html',
    styleUrls: ['./template-nav.component.css']
})

export class NavTemplateComponent {
    constructor(private request: RequestService) {
    }

    ngOnInit(): void {
        console.log(this.request.getData(), "同步获取异步数据") // 同步方法获取异步数据，undefined
        /*
            回调函数获取异步数据
        */
        this.request.getCallData((data: any)=>{
            console.log(data, "回调函数方式获取异步数据")
        })

        /*
            Promise 获取异步数据
        */
        let promiseData = this.request.getPromiseData()
        promiseData.then((data)=>{
            console.log("promise 获取异步数据:", data)

        })

        /*
            RXjs 获取异步数据
        */
        let rxjsData = this.request.getRxjsData()
        let d = rxjsData.subscribe((data)=>{
            console.log("rxjs 获取异步数据", data)
        })
        // rxjs 订阅取消
        setTimeout(()=>{
            // d.unsubscribe()
        }, 1000)

        /**
         * 多次执行promise, 只执行一次
         */
        let promiseIntervalData = this.request.getPromiseIntervalData()
        promiseIntervalData.then((data)=>{
            console.log("promise-interval 获取异步数据:", data)

        })

        /**
         * 多次执行rxjs, 正常执行
         */
        // let rxjsIntervalData = this.request.getRxjsIntervalData()
        // rxjsIntervalData.subscribe((data)=>{
        //     console.log("RXJS-interval 获取异步数据:", data)
        // })


        /*
            rxjs 提供的工具方法-filter
        */
        // let stream = this.request.getRxjsUtilsData()
        // stream.pipe(
        //     filter((value: any)=>{
        //         if(value%2==0) {
        //             return true
        //         }
        //     })
        // ).subscribe((data)=>{
        //     console.log("RXJS-filter数据:", data)
        // })

      
        /*
            rxjs 提供的工具方法-map
        */
        // let stream = this.request.getRxjsUtilsData()
        // stream.pipe(
        //     map((value: any)=>{
        //         return value*value
        //     })
        // ).subscribe((data)=>{
        //     console.log("RXJS-map数据:", data)
        // })

        /* 
            rxjs 提供的工具方法-map,filter 管道连写
        */
        // let stream = this.request.getRxjsUtilsData()
        // stream.pipe(
        //     filter((value: any)=>{
        //         if(value%2 == 0) {
        //             return true
        //         }
        //     }),
        //     map((value: any)=>{
        //         return value*value
        //     })
        // ).subscribe((data)=>{
        //     console.log("RXJS-工具方法处理数据:", data)
        // })

    }
}