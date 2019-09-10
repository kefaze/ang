import { CanDeactivate } from '@angular/router'

import { UserSettingsComponent } from '../user-settings/user-settings.component'
// UserSettingsComponent--要守卫的组件类
export class UnsaveGuard implements CanDeactivate<UserSettingsComponent> {

    saveState: boolean = false

    // canDeactivate(component: UserSettingsComponent) {
    //     console.log(component, "CanDeactivate component")
    //     if(component.saveState) {
    //         return true
    //     }else {
    //         return window.confirm("您还没保存，确认离开吗？")
    //     }
    // }
    /* return true 直接离开 return false 不能离开该路由 */
    canDeactivate(component: UserSettingsComponent) {
        if(this.saveState) {
            return true
        }else {
            return window.confirm("您还没保存，确认离开吗？")
        }
    }

    changeSaveState() {
        this.saveState = true
    }

}