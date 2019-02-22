import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moduledemo',
  templateUrl: './moduledemo.component.html',
  styleUrls: ['./moduledemo.component.css']
})
export class ModuledemoComponent implements OnInit {

  constructor(private router: Router) { console.log('compoent loaded') }

  ngOnInit() {
  }
  public gotoDashboard() {
    this.router.navigate(['home/dashboard']);
  }
  public gotoAboutus(){
    this.router.navigate(['home/aboutus']);
  }
  public gotoContact(){
    this.router.navigate(['home/contactus']);
  }
}
