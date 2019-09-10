import { Component, Directive, HostListener, ElementRef } from '@angular/core'

@Directive({
    selector: '[input-trim]',
    host: {
        '(keyup)': 'keyUpFunc($event.target)',
        '(click)': 'onClick($event.target)',
        'role-data': 'input-trim'
    }
})
export class InputTrimDirective {
    private _elementRef: ElementRef
    constructor(_elementRef: ElementRef) {
        console.log(_elementRef, "获取挂载属性的DOM")
        this._elementRef = _elementRef
    }
    /**
     *  是属性装饰器，用来为宿主元素添加事件监,类似于我们原生JavaScript的addEventListener
        @HostListener这里我们监听了keyup事件(可以定义原生JavaScript中的其他事件),
        当表单中有输入的时候我们就会调用方法，传递了一个$event对象进去，后面紧跟我们触法keyup事件的方法体
        可以用 @Component 中的 host 代替
     * */
    // @HostListener('keyup', ['$event.target'])
    keyUpFunc(evt) {
        if(evt.value) {
            this._elementRef.nativeElement.value = evt.value + '_num'
        }

    }
    onClick(evt) {
        console.log(evt.innerHTML, "click_div")
        if(evt.innerHTML) {
            this._elementRef.nativeElement.innerHTML = evt.innerHTML + '_num'
        }
    }
}

@Component({
    selector: 'template-directive',
    templateUrl: './template-directive.component.html',
    styleUrls: ['./template-directive.component.css']
})

export class TemplateDirective {
    constructor() {

    }
}