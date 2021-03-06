import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rotoplas',
  templateUrl: './rotoplas.component.html',
  styleUrls: ['./rotoplas.component.scss']
})
export class RotoplasComponent implements OnInit {

  @ViewChild ("top" , {static: true} ) top! : ElementRef;
  @ViewChild ("ext" , {static: true} ) ext! : ElementRef;
  @ViewChild ("int" , {static: true} ) int! : ElementRef;
  @ViewChild ("fire" , {static: true} ) fire! : ElementRef;
  @ViewChild ("hor" , {static: true} ) hor! : ElementRef;



  exterior : any;
  interior : any;
  antifire : any;
  horizontal : any;
  toppage : any;




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



  constructor() { 
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
    this.exterior = this.ext.nativeElement;

    setTimeout( () => {

    this.exterior.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }

  goToInterior(){
    this.interior = this.int.nativeElement;

    setTimeout( () => {

    this.interior.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }
  
  goToFire(){
    this.antifire = this.fire.nativeElement;

    setTimeout( () => {

    this.antifire.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }

  goToHorizontal(){
    this.horizontal = this.hor.nativeElement;

    setTimeout( () => {

    this.horizontal.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }

  
  goToTop(){
    this.toppage = this.top.nativeElement;

    setTimeout( () => {

    this.toppage.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }

  ngOnInit(): void {
    this.goToTop()

    const clear = setInterval(() => {
      this.currentImage = this.updateRandomImage();
    
      if(!window.location.href.includes('rotoplas')){ 
        clearInterval(clear)
      }
      }, 2000);
  
  }

}
