import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuledemoComponent } from '../component/moduledemo/moduledemo.component';
import { AboutusComponent } from '../component/aboutus/aboutus.component';
import { ContactusComponent } from '../component/contactus/contactus.component';

const  routes: Routes = [
  { path: '', component: ModuledemoComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
    {path : 'dashboard', loadChildren:'../../dashboard/dashboard.module#DashboardModule'}
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class HomeRoutingModule { }
