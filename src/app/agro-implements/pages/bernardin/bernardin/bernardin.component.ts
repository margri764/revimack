import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bernardin',
  templateUrl: './bernardin.component.html',
  styleUrls: ['./bernardin.component.scss']
})
export class BernardinComponent implements OnInit {

@ViewChild ("top" , {static: true} )     top! : ElementRef;

phone: boolean=false;
private currentImage: any;

bernardinArray = [
  { path: "./assets/bernardin/img1-min.png" },
  { path: "./assets/bernardin/img2-min.png" },
  { path: "./assets/bernardin/img3-min.png" },
  { path: "./assets/bernardin/img4-min.png" },
  { path: "./assets/bernardin/img5-min.png" },
 ];

 bernardinArray2 = [
  { path: "./assets/bernardin/1-phone.png" },
  { path: "./assets/bernardin/2-phone.png" },
  { path: "./assets/bernardin/3-phone.png" },
  { path: "./assets/bernardin/4-phone.png" },
  { path: "./assets/bernardin/5-phone.png" },
 ];
  

constructor() {
  this.currentImage = this.updateRandomImage();
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

  updateRandomImage() {
    if(this.phone){
      const showRandomImg= Math.floor(Math.random() * (this.bernardinArray2.length )) ;
      return this.bernardinArray2[showRandomImg];
    }else{
      const showRandomImg= Math.floor(Math.random() * (this.bernardinArray.length )) ;
      return this.bernardinArray[showRandomImg];
    }
  }

  getImage() {
    return this.currentImage.path;
  }

  ngOnInit(): void {
    this.goToTop();
    (screen.width <= 575) ? this.phone= true : false;

    const clear = setInterval(() => {
      this.currentImage = this.updateRandomImage();
    
      if(!window.location.href.includes('bernardin')){ 
        clearInterval(clear)
      }
      }, 4500);
  
    }

}
