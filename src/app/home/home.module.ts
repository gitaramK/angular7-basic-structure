import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuledemoComponent } from './component/moduledemo/moduledemo.component';
import { HomeRoutingModule } from './home-routing/home-routing.module';
import { ContactusComponent } from './component/contactus/contactus.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { LmenuComponent } from '../shared/component/lmenu/lmenu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
    
  ],
  declarations: [ModuledemoComponent, ContactusComponent, AboutusComponent,LmenuComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { 
  constructor(){
    console.log('home module loaded');
  }
}
