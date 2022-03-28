import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantium',
  templateUrl: './plantium.component.html',
  styleUrls: ['./plantium.component.scss']
})
export class PlantiumComponent implements OnInit {

  @ViewChild ("top" , {static: true} ) top! : ElementRef;
  @ViewChild ("ext" , {static: true} ) ext! : ElementRef;
  @ViewChild ("int" , {static: true} ) int! : ElementRef;
  @ViewChild ("fire" , {static: true} ) fire! : ElementRef;
  @ViewChild ("hor" , {static: true} ) hor! : ElementRef;



  // exterior : any;
  // interior : any;
  // antifire : any;
  // horizontal : any;
  public ecuRow : string='';
  public steer : string='';
  public thanks : boolean = true;
  public phone : boolean = false;




  private currentImage: any;

  rotoArray = [
    { path: "./assets/rotoplas/tanque_ext_5000.png" },
    { path: "./assets/rotoplas/tanque_ext_10000.png" },
    { path: "./assets/rotoplas/tanque_ext_25000.png" },
    { path: "./assets/rotoplas/tanque_hor_500.png" },
    { path: "./assets/rotoplas/tanque_hor_2000.png" },
    { path: "./assets/rotoplas/tanque_hor_3000.png" },
    { path: "./assets/rotoplas/tanque_int_5000.png" },
    { path: "./assets/rotoplas/tanque_int_10000.png" },
    { path: "./assets/rotoplas/tanque_int_25000.png" },
    { path: "./assets/rotoplas/tanque_aut_5000.png" },
    { path: "./assets/rotoplas/tanque_aut_10000.png" },
    { path: "./assets/rotoplas/tanque_aut_25000.png" },
   ]



  constructor(  
              private route : Router
  ) { 
    this.currentImage = this.updateRandomImage();
  }


  updateRandomImage() {
    const showRandomImg= Math.floor(Math.random() * (this.rotoArray.length )) ;
    return this.rotoArray[showRandomImg];
  }

  getImage() {
    return this.currentImage.path;
  }

  goToExterior(){

    setTimeout( () => {

      this.ext.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }

  goToInterior(){

    setTimeout( () => {

      this.int.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }
  
  goToFire(){

    setTimeout( () => {

      this.fire.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }

  goToHorizontal(){

    setTimeout( () => {

      this.hor.nativeElement.scrollIntoView(
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

    (screen.width <= 575) ? [this.ecuRow= "assets/plantium/ecuRow_cel.png", this.steer= "assets/plantium/steer-phone.png",this.phone=true] : [this.ecuRow="assets/plantium/ecuRow.png", this.steer= "assets/plantium/steer.png" , this.phone=false];




    const clear = setInterval(() => {
      this.currentImage = this.updateRandomImage();
    
      if(!window.location.href.includes('rotoplas')){ 
        clearInterval(clear)
      }
      }, 2000);
  
  }

}
