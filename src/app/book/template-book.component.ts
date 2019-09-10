import { Component } from '@angular/core'

import { ActivatedRoute, Router, Route, Routes } from '@angular/router'

@Component({
    selector: 'template-book',
    templateUrl: './template-book.component.html',
    styleUrls: ['./template-book.component.css']
})

export class TemplateBookComponent {

    private bookList = [
        {
            name: '麦田里的守望者',
            id: '1'
        },
        {
            name: '百年孤独',
            id: '2'
        },
        {
            name: '白鲸',
            id: '3'
        },
        {
            name: '时间简史',
            id: '4'
        }
    ]

   

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    jumpDetial(bookId: string): void {
        console.log("js 方式跳转")
        this.router.navigate(['/details', '1'], {
            // queryParams: {
            //     id: bookId
            // }
        })
    }

    toChildPath(): void {
        // 方式1： 全路径匹配
        this.router.navigate(['/book/intro']) 
        // 方式2： 使用relativeTo. 其中 router 是Router的实例，this.route是 ActivatedRoute 的实例
        this.router.navigate(['intro'], {
            relativeTo: this.route
        })
    }
}

import { IntroComponent } from './intro/intro.component'
export const bookChildrenRoutes:Routes = [
    {
        path: 'intro', component: IntroComponent
    }
]