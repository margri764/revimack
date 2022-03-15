import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotoplas',
  templateUrl: './rotoplas.component.html',
  styleUrls: ['./rotoplas.component.scss']
})
export class RotoplasComponent implements OnInit {

  public exterior : boolean=false;
  public interior : boolean=false;
  public incendio : boolean=false;
  public horizontal : boolean=false;



  constructor() { }


  toggleExterior(){
    this.exterior=!this.exterior
  }

  toggleInterior(){
    this.interior=!this.interior
  }

  toggleIncendio(){
    this.incendio=!this.incendio
  }
  
  toggleHorizontal(){
    this.horizontal=!this.horizontal;
  }

  closeCollapse( name : string){

    switch (name){
      case 'exterior':
         this.exterior=false
      break

      case 'interior':
        this.interior=false
     break

     case 'incendio':
      this.incendio=false
     break

     case 'horizontal':
      this.horizontal=false
   break
      
    default: name
    }

  }

  ngOnInit(): void {
  }

}
