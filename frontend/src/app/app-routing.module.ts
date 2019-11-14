import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainContextComponent } from './main-context/main-context.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainContextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
