import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  reseaux:any=[
    {
      name:"Linkedin",
      image:'../../../assets/images/linkedin.png',
      url:'facebook.com/sguira96'

    },
    {
      name:"facebook",
      image:'../../../assets/images/facebook.png',
      url:''

    },{
      name:"Github",
      image:'../../../assets/images/github.png',
      url:''

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  goto(url:string){
    window.location.href=url;
  }

}
