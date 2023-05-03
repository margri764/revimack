import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-used',
  templateUrl: './home-used.component.html',
  styleUrls: ['./home-used.component.scss']
})
export class HomeUsedComponent implements OnInit {

  private currentImage: any;
  value : number = 250;

  arrayUsedCars = [
    {
      img1: "./assets/usados/micruze1.jpeg",
      img2: "./assets/usados/micruze2.jpeg",
      img3: "./assets/usados/micruze3.jpeg",
      img4: "./assets/usados/micruze4.jpeg",
    },
  ]

  img1 : string = '';
  img2 : string = '';
  img3 : string = '';
  img4 : string = '';
  img5 : string = '';


  constructor() {
    this.currentImage = this.updateRandomImage();

   }

  ngOnInit(): void {
    this.calcQueries();
    this.mainImg();
    this.valueToHeightCarousel();

    const clear = setInterval(() => {
      this.currentImage = this.updateRandomImage();
    
      if(!window.location.href.includes('home-usados')){ 
        clearInterval(clear)
      }
      }, 2500);
  
  }


  calcQueries(){
    if(screen.width > 1400 ){

    }
  }

  rotoArray = [
    { path: "./assets/usados/1600x600-video1.gif" },
    { path: "./assets/usados/1600x600-video2.gif" },
    { path: "./assets/usados/1600x600-video3.gif" },
  
   ]

   
  getImage() {
    return this.currentImage.path;
  }

  updateRandomImage() {
    const showRandomImg= Math.floor(Math.random() * (this.rotoArray.length )) ;
    return this.rotoArray[showRandomImg];
  }

  mainImg(){
    this.arrayUsedCars.forEach((item)=>{ 
      this.img1 = item.img1;
      this.img2 = item.img2;
      this.img3 = item.img3;
      this.img4 = item.img4;
   
     })
   }

  goToMainImg (value : string){
 
    switch( value ){ 
      case 'img2' :
                 this.img1 = this.img2; 
       break;
      
      case 'img3': 
                this.img1 = this.img3; 
      break;
  
      case 'img4': 
      this.img1 = this.img4; 
      break;
  
   
    }
  }

  valueToHeightCarousel(){
    if (screen.width > 300 && screen.width < 574){
      this.value = 160;
      return;
    }
    if (screen.width > 574 && screen.width < 768){
      this.value = 180;
      return;
    }
    if (screen.width > 768 && screen.width < 1300){
      this.value = 190;
      return;
    }
    if (screen.width > 1300 ){
      this.value = 220;
      return;
    }
  }
 

}
