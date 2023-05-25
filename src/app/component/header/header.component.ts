import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public subMenu:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  changeSubMenu(){
    this.subMenu=!this.subMenu;
  }

}
