import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  color:string = "blue";
  texteButton:string = "Cliquez-moi"
  
  constructor() { }
  
  //Action quand clic sur le bouton
  liaisonEvenement() {
    this.texteButton = "Merci !";
  } 

  ngOnInit(): void {
  }

}
