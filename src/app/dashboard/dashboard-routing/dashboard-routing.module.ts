import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPanelComponent } from '../dashboard-panel/dashboard-panel.component';

const  routes: Routes = [
  { path: '', component:DashboardPanelComponent}
]; 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class DashboardRoutingModule { }
