import { Component } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'template-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})

export class IntroComponent {

    queryId:string
    constructor(private router: Router, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params=>{
            this.queryId = params['id']
        })

    }

}