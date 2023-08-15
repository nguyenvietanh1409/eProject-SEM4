import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LayoutComponent, children: [
    {path: '', component: HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
