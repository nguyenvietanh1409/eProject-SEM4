import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { CoursesComponent } from './component/courses/courses.component';
import { TeachersComponent } from './component/teachers/teachers.component';
import { BlogsComponent } from './component/blog/blogs/blogs.component';
import { BlogDetailComponent } from './component/blog/blog-detail/blog-detail.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/account/login/login.component';
import { RegisterComponent } from './component/account/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LayoutComponent,
    CoursesComponent,
    TeachersComponent,
    BlogsComponent,
    BlogDetailComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
