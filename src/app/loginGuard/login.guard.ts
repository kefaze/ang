import { CanActivate } from '@angular/router'

export class LoginGuard implements CanActivate{
    loginState: boolean = false
    canActivate() {
        if(this.loginState) {
            return true
        }else {
            return false
        }
    }

    login() {
        this.loginState = true
    }

    loginOut() {
        this.loginState = false
    }
}