import { Component } from '@angular/core'

import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'book-details',
    templateUrl: './bookDetails.component.html',
    styleUrls: ['./bookDetails.component.css']
})

export class bookDetailsComponent {

    queryParams: string

    constructor( private route: ActivatedRoute) {
        // query方式获取参数 /book?id=1
        this.route.queryParams.subscribe(params=>{
            this.queryParams = params['id']
            console.log(this.queryParams)
        })
        //  '/book/1' 方式获取参数
        this.queryParams = this.route.snapshot.params['id']
    }
}