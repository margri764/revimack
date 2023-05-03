import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-used',
  templateUrl: './home-used.component.html',
  styleUrls: ['./home-used.component.scss']
})
export class HomeUsedComponent implements OnInit {

  private currentImage: any;


  constructor() {
    this.currentImage = this.updateRandomImage();

   }

  ngOnInit(): void {
    this.calcQueries();

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

}
