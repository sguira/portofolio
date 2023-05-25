import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss']
})
export class HorizontalScrollComponent implements OnInit {

  @Input()
  body:any;

  @Input()
  titre:String=""

  constructor() { }

  ngOnInit(): void {
  }

  scrollLeft(){
    let element=document.querySelector(".scroll");
    element!.scrollBy(350,0)
  }

  scrollRight(){
    let element=document.querySelector(".scroll");
    element!.scrollBy(-350,0)
  }



}
