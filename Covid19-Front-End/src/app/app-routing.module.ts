import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassComponent } from './PassReg/pass.component';
import { HomeComponent } from './home/home.component';
import { ViewpassComponent } from './viewpass/viewpass.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch: 'full' },
  {path:'register', component: PassComponent},
  {path:'home', component: HomeComponent},
  {path:'viewpass', component: ViewpassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
