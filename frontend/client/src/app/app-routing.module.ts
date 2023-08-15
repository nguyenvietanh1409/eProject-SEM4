import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { CoursesComponent } from './component/courses/courses.component';
import { TeachersComponent } from './component/teachers/teachers.component';
import { BlogsComponent } from './component/blog/blogs/blogs.component';
import { BlogDetailComponent } from './component/blog/blog-detail/blog-detail.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/account/login/login.component';
import { RegisterComponent } from './component/account/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: '', component: LayoutComponent,children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'teachers', component: TeachersComponent},
    {path: 'blogs', component: BlogsComponent},
    {path: 'blog/detail', component: BlogDetailComponent},
    {path: 'contact', component: ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
