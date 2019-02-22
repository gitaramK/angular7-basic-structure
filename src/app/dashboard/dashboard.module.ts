import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardPanelComponent]
})
export class DashboardModule {
  constructor(){
    console.log('Dashboard module loaded');
  }
 }
