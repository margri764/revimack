import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesce',
  templateUrl: './pesce.component.html',
  styleUrls: ['./pesce.component.scss']
})
export class PesceComponent implements OnInit {

  public acondicionador : boolean=false;
  public abono : boolean=false;
  public desterronador : boolean=false;
  public rolo : boolean=false;



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

  ngOnInit(): void {
  }

}
