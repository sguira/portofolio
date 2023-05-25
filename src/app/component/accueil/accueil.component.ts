import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  langage:any=[
    {
      "name":'python',
      "image":'../../../assets/images/java.png'
    }
    ,
    {
      "name":'Java',
      "image":''
    },
    {
      "name":'C',
      "image":''
    },
    {
      "name":'JavaScript',
      "image":''
    },
    {
      "name":'Php',
      "image":''
    }
  ]

  titreCompetence:string="Compétence"

  constructor() { }

  scrollTo(){
    var scroller=document.getElementById("scroller");
    window.scrollTo({
      behavior:'smooth',
      top:700
    })
  }

  ngOnInit(): void {
    let main=document.getElementById('main')

  }



}
