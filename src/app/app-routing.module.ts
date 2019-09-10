import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 组件引入
import { TemplateDirective } from './directive/template-directive.component'
import { AppComponent } from './app.component';
import { TemplateBookComponent } from './book/template-book.component'
import { bookDetailsComponent } from './bookDetails/bookDetails.component'
import { HomeComponent } from './home/home.component'
import { UserSettingsComponent } from './user-settings/user-settings.component'

// 子路由引入
import { bookChildrenRoutes } from './book/template-book.component'

// 路由守卫
import { LoginGuard } from './loginGuard/login.guard'
import { UnsaveGuard } from './loginGuard/unsave.guard'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'app', component: AppComponent  },
  { path: 'directive', component: TemplateDirective },
  { path: 'book', component: TemplateBookComponent, children: bookChildrenRoutes},
  { path: 'details/:id', component: bookDetailsComponent },
  // { path: 'details', component: bookDetailsComponent }
  { path: 'usersetting', component:  UserSettingsComponent, canActivate: [LoginGuard], canDeactivate: [UnsaveGuard]},
  { path: 'home', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
