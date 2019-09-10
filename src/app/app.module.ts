import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 组件
import { TemplateDirective } from './directive/template-directive.component'
import { NavTemplateComponent } from './nav/template-nav.component'
import { TemplateBookComponent } from './book/template-book.component'
import { bookDetailsComponent } from './bookDetails/bookDetails.component'
import { IntroComponent } from './book/intro/intro.component'

// 指令
import { InputTrimDirective } from './directive/template-directive.component';

// 组件
import { HomeComponent } from './home/home.component';
import { UserSettingsComponent } from './user-settings/user-settings.component'

// 路由守卫
import { LoginGuard } from './loginGuard/login.guard'
import { UnsaveGuard } from './loginGuard/unsave.guard'

@NgModule({
  // 引入组件，指令
  declarations: [
    AppComponent,
    NavTemplateComponent,
    TemplateBookComponent,
    TemplateDirective,
    InputTrimDirective,
    bookDetailsComponent,
    IntroComponent,
    HomeComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginGuard, UnsaveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
