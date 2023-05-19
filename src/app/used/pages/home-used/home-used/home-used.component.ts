import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data/data.service';
import { NotifyModalComponent } from 'src/app/used/messages/notify-modal/notify-modal/notify-modal.component';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-home-used',
  templateUrl: './home-used.component.html',
  styleUrls: ['./home-used.component.scss']
})
export class HomeUsedComponent implements OnInit {

@ViewChild ("top" , {static: true} ) top! : ElementRef;
  toastLiveExample! : bootstrap.Toast;
  currentImage: any;
  value : number = 250;
  celltoShow : number = 5.5;
  bannerArray : any []=[];
  currentIndex = 0;
  banner : string = "";
  bannerPromo : string = '';
  showBrands : boolean = true;
  phone : boolean = false;
  triggerModalSuccessEmail : boolean = false;

  
  arrayTractors : any [] = [];
  arrayFumigadoras : any [] = [];
  arrayCosechadoras : any [] = [];
  arraySembradoras : any [] = [];
  arrayViales : any [] = [];
  arrayCarros : any [] = [];
  arrayItems : any [] = [];
  currentDate : Date = new Date();
  timeDelivered : Date = new Date();

  constructor(
              private router : Router,
              private dataService : DataService,
              private modalService: NgbModal
  ) {
     this.currentImage = this.showImgBanner();
     (screen.width <= 575) ? this.phone = true : false; 
     this.scrollToTop();

   }


  
  ngOnInit(): void {

    // if (!this.dataService.hasRedirected) {
    //   this.dataService.hasRedirected = true;
    //   this.router.navigateByUrl('/usados-seleccionados/promo-skf');
    // }



    this.arrayFumigadoras = this.dataService.arrayFumigador;
    this.arrayTractors = this.dataService.arrayTractors;
    this.arrayCosechadoras = this.dataService.arrayCosechadoras;
    this.arraySembradoras = this.dataService.arraySembradoras;
    this.arrayViales = this.dataService.arrayViales;
    this.arrayCarros = this.dataService.arrayCarros;

    this.returnOnlyOneItem(this.arrayTractors);
    this.arrayItems = this.arrayOneItem;

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
    
    scrollToTop(){
      setTimeout( () => {
        this.top.nativeElement.scrollIntoView(
        { 
          alignToTop: true,
          block: "center",
        });
        }, 0);
    }

openModal() {
      const modalOptions: NgbModalOptions = {
        // windowClass: 'my-custom-modal',
        backdrop: "static",
        centered: true
      };
    
      const modalRef = this.modalService.open(NotifyModalComponent, modalOptions);
      modalRef.componentInstance.data = { data: "cosechadora" };
}

arrayOneItem : any;
returnOnlyOneItem(arrayItem: any) {
    const uniqueItems = arrayItem.reduce((accumulator: any[], current: { name: any }) => {
      const found = accumulator.find((item: { name: any }) => item.name === current.name);
      if (!found) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
  
    this.arrayOneItem = uniqueItems;
    console.log(this.arrayOneItem);
  

}
  
categorySelected( item : string){

  
  switch (item) {
    case "tractor":
                  this.returnOnlyOneItem(this.arrayTractors);
                  this.arrayItems = this.arrayOneItem;
      break;
    case "fumigador":
                  this.returnOnlyOneItem(this.arrayFumigadoras);
                  this.arrayItems = this.arrayOneItem;
    break;
    case "cosechadora":
                  this.returnOnlyOneItem(this.arrayCosechadoras);
                  this.arrayItems = this.arrayOneItem;
    break;

    case "sembradora":
                  this.returnOnlyOneItem(this.arraySembradoras);
                  this.arrayItems = this.arrayOneItem;
    break;

    case "vial":
                  this.returnOnlyOneItem(this.arrayViales);
                  this.arrayItems = this.arrayOneItem;
    break;
    case "carro":
                this.returnOnlyOneItem(this.arrayCarros);
                this.arrayItems = this.arrayOneItem;
     break;

  
    default:
      break;
  }
}

getImage() {
    return this.currentImage ? this.currentImage.path : '';
}

showImgBanner() {
  const nextIndex = (this.currentIndex + 1) % this.bannerArray.length;
  this.currentIndex = nextIndex;
  return this.bannerArray[nextIndex];
}
  
valueToHeightCarousel(){
    if (screen.width > 300 && screen.width < 574){
      this.value = 130;
      this.showBrands = false;
      this.celltoShow = 3.3
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
      this.showBrands = false;
      this.celltoShow = 4.3
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
      this.celltoShow = 4.3
      this.showBrands = false;
      this.bannerArray = [
        { path: "./assets/usados/500x400-video1.png" },
        { path: "./assets/usados/500x400-video2.png" },
        { path: "./assets/usados/500x400-video3.png" },
       ]
       this.banner = "./assets/usados/revi-banner-500x400.png";
       this.bannerPromo = "./assets/usados/banner-skf-phone.png";
      
      return;
        }

    if (screen.width > 1200 ){
      this.value = 250;
      // this.celltoShow = 4.4;

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
      this.value = 200;
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
