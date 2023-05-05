import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home-used',
  templateUrl: './home-used.component.html',
  styleUrls: ['./home-used.component.scss']
})
export class HomeUsedComponent implements OnInit {

  public currentImage: any;
  value : number = 250;
  bannerArray : any []=[];
  currentIndex = 0;
  banner : string = "";
  bannerPromo : string = '';


  arrayUsedCars = [
    {
      img1: "./assets/usados/revi-1.jpg",
      img2: "./assets/usados/revi-2.jpg",
      img3: "./assets/usados/revi-3.jpg",
      img4: "./assets/usados/revi-4.jpg",
    },
  ]

  img1 : string = '';
  img2 : string = '';
  img3 : string = '';
  img4 : string = '';
  img5 : string = '';


  constructor(
              private router : Router,
              private dataService : DataService
  ) {
     this.currentImage = this.showImgBanner();

   }

  ngOnInit(): void {


    if (!this.dataService.hasRedirected) {
      this.dataService.hasRedirected = true;
      this.router.navigateByUrl('/usados-seleccionados/promo-skf');
    }

    this.mainImg();
    this.valueToHeightCarousel();

     this.currentImage = this.bannerArray[0];
     this.currentIndex = 0;

    const clear = setInterval(() => {
      this.currentImage = this.showImgBanner();
    
      if(!window.location.href.includes('home-usados')){ 
        clearInterval(clear)
      }
      }, 3500);
  
  }

  getImage() {
    return this.currentImage ? this.currentImage.path : '';
  }


showImgBanner() {
  const nextIndex = (this.currentIndex + 1) % this.bannerArray.length;
  this.currentIndex = nextIndex;
  return this.bannerArray[nextIndex];
}


  mainImg(){
    this.arrayUsedCars.forEach((item)=>{ 
      this.img1 = item.img1;
      this.img2 = item.img2;
      this.img3 = item.img3;
      this.img4 = item.img4;
   
     })
  }

  goToMainImg(value: string) {
    let selectedImgSrc = '';
  
    switch (value) {
      case "img2":
        selectedImgSrc = this.img2;
        this.img2 = this.img1;
        this.img1 = selectedImgSrc;
        break;
  
      case "img3":
        selectedImgSrc = this.img3;
        this.img3 = this.img1;
        this.img1 = selectedImgSrc;
        break;
  
      case "img4":
        selectedImgSrc = this.img4;
        this.img4 = this.img1;
        this.img1 = selectedImgSrc;
        break;
  
      default:
        break;
    }
  }
  
  valueToHeightCarousel(){
    if (screen.width > 300 && screen.width < 574){
      this.value = 160;
      this.bannerArray = [
        { path: "./assets/usados/500x400-video1.png" },
        { path: "./assets/usados/500x400-video2.png" },
        { path: "./assets/usados/500x400-video3.png" },
       ]
       this.banner = "./assets/usados/revi-banner-500x400.png";
       this.bannerPromo = "./assets/usados/banner-skf-phone.png";
      return;
    }

    if (screen.width > 574 && screen.width < 768){
      this.value = 180;
      this.bannerArray = [
        { path: "./assets/usados/500x400-video1.png" },
        { path: "./assets/usados/500x400-video2.png" },
        { path: "./assets/usados/500x400-video3.png" },
       ]
       this.banner = "./assets/usados/revi-banner-500x400.png";
       this.bannerPromo = "./assets/usados/banner-skf-phone.png";

      return;
    }

    if (screen.width > 768 && screen.width < 1200){
      this.value = 200;
      this.bannerArray = [
        { path: "./assets/usados/500x400-video1.png" },
        { path: "./assets/usados/500x400-video2.png" },
        { path: "./assets/usados/500x400-video3.png" },
       ]
       this.banner = "./assets/usados/revi-banner-500x400.png";
       this.bannerPromo = "./assets/usados/banner-skf-phone.png";
      
      return;
      return;
    }

    if (screen.width > 1200 ){
      this.value = 350;
      this.bannerArray = [
        { path: "./assets/usados/1600x600-video1.gif" },
        { path: "./assets/usados/1600x600-video2.gif" },
        { path: "./assets/usados/1600x600-video3.gif" },
       ]
       this.banner = "./assets/usados/revi-banner.png";
       this.bannerPromo = "./assets/usados/banner-skf.png";

    
      return;
    }

    if (screen.width > 1600 ){
      this.value = 350;
      this.bannerArray = [
        { path: "./assets/usados/1600x600-video1.gif" },
        { path: "./assets/usados/1600x600-video2.gif" },
        { path: "./assets/usados/1600x600-video3.gif" },
       ]
       this.banner = "./assets/usados/revi-banner.png";
       this.bannerPromo = "./assets/usados/banner-skf.png";

    
      return;
    }
  }
 

}
