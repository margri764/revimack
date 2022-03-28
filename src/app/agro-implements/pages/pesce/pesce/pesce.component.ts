import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pesce',
  templateUrl: './pesce.component.html',
  styleUrls: ['./pesce.component.scss']
})
export class PesceComponent implements OnInit {

  @ViewChild ("acond" , {static: true} )   acond! : ElementRef;
  @ViewChild ("abon" , {static: true} )    abon! : ElementRef;
  @ViewChild ("desterr" , {static: true} ) desterr! : ElementRef;
  @ViewChild ("rol" , {static: true} )     rol! : ElementRef;
  @ViewChild ("top" , {static: true} )     top! : ElementRef;


  public acondicionador : boolean=false;
  public abono : boolean=false;
  public desterronador : boolean=false;
  public rolo : boolean=false;
  public phone : boolean=false;


  constructor() { }


  toggleAcondicionador(){
    this.acondicionador=!this.acondicionador
  }

  toggleAbono(){
    this.abono=!this.abono
  }

  toggleDesterronador(){
    this.desterronador=!this.desterronador
  }
  
  toggleRolo(){
    this.rolo=!this.rolo;
  }

  closeCollapse( name : string){

    switch (name){
      case 'acondicionador':
         this.acondicionador=false
      break

      case 'abono':
        this.abono=false
     break

     case 'desterronador':
      this.desterronador=false
     break

     case 'rolo':
      this.rolo=false
   break
      
    default: name
    }

  }

  goToAcondicionador(){

    setTimeout( () => {

      this.acond.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }

  goToAbono(){

    setTimeout( () => {

      this.abon.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }
  
  goToDesterronador(){

    setTimeout( () => {

      this.desterr.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }

  goToRolo(){

    setTimeout( () => {

      this.rol.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }

  goToTop(){

    setTimeout( () => {

      this.top.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }
  
  ngOnInit(): void {
    this.goToTop();
    (screen.width <= 575) ? this.phone= true : false;
  }

}
