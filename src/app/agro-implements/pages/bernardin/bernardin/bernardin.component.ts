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

rotoArray = [
  { path: "./assets/bernardin/img1-min.png" },
  { path: "./assets/bernardin/img2-min.png" },
  { path: "./assets/bernardin/img3-min.png" },
  { path: "./assets/bernardin/img4-min.png" },
  { path: "./assets/bernardin/img5-min.png" },
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
    const showRandomImg= Math.floor(Math.random() * (this.rotoArray.length )) ;
    return this.rotoArray[showRandomImg];
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
