import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { AgroMachines } from 'src/app/models/products';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-view-more-used',
  templateUrl: './view-more-used.component.html',
  styleUrls: ['./view-more-used.component.scss']
})
export class ViewMoreUsedComponent implements OnInit {

arrItems : AgroMachines [] = [];
item : any;
phone : boolean = false;
arrSimilarMachines : AgroMachines [] = [] ;

value : number = 250;
banner : string = "assets/usados/banner-negocios.png";
img1 : string = '';
img2 : string = '';
img3 : string = '';
img4 : string = '';
img5 : string = '';

screenWidth = screen.width;
numero!: number;

  constructor(
              private activatedRoute : ActivatedRoute,
              private dataService : DataService
  ) { 

        (screen.width <= 575) ? this.phone = true : false; 
        this.activatedRoute.params.subscribe(
          ({category, brand, name})=>{
                this.arrItems = this.dataService.getMachinesById(category, brand, name);
                this.item = this.arrItems[0];
              }
        )
  }

  ngOnInit(): void {
    this.mainImg();
    this.valueToHeightCarousel();
    this.arrSimilarMachines = (this.dataService.returnOnlyOneItem());

  }


  
  mainImg() {
    const length = this.arrItems.length;
    if (length == 1) {
      this.img1 = this.arrItems[0].img;
      return
    }

    if (length == 2) {
      this.img1 = this.arrItems[0].img;
      this.img2 = this.arrItems[1].img;
      return
    }

    if (length == 3) {
      this.img1 = this.arrItems[0].img;
      this.img2 = this.arrItems[1].img;
      this.img3 = this.arrItems[2].img;
       return
    }
    if (length == 4) {
      this.img1 = this.arrItems[0].img;
      this.img2 = this.arrItems[1].img;
      this.img3 = this.arrItems[2].img;
      this.img4 = this.arrItems[3].img;
      return

    }
    
    if (length == 5) {
      this.img1 = this.arrItems[0].img;
      this.img2 = this.arrItems[1].img;
      this.img3 = this.arrItems[2].img;
      this.img4 = this.arrItems[3].img;
      this.img5 = this.arrItems[4].img;
      return

    }
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

      case "img5":
        selectedImgSrc = this.img5;
        this.img5 = this.img1;
        this.img1 = selectedImgSrc;
        break;  
  
      default:
        break;
    }
  }

  valueToHeightCarousel(){

    if(this.screenWidth >= 300 && this.screenWidth <= 575){
      this.banner = "assets/usados/banner-negocios-phone.png"
        const screenRange = 575 - 300;
        const numeroRange = 355 - 185;
        const proportion = (this.screenWidth - 300) / screenRange;
        this.numero = 185 + Math.round(numeroRange * proportion);
        this.value = this.screenWidth - this.numero;
        return;
     } else {
        this.numero = 185;
        this.value = this.screenWidth - this.numero;
    }

    if(this.screenWidth >= 601 && this.screenWidth <= 786  ){
        const screenRange = 780 - 601;
        const numeroRange = 630 - 490;
        const proportion = (this.screenWidth - 601) / screenRange;
        this.numero = 490 + Math.round(numeroRange * proportion);
        this.value = this.screenWidth - this.numero;
        return;
     } else {
       this.numero = 490;
       this.value = this.screenWidth - this.numero;
     }

    if (this.screenWidth >= 787 && this.screenWidth <= 1200) {
      const screenRange = 1200 - 786;
      const numeroRange = 950 - 630;
      const proportion = (this.screenWidth - 786) / screenRange;
      this.numero = 630 + Math.round(numeroRange * proportion);
      this.value = this.screenWidth - this.numero;
      return;
    } else {
      this.numero = 630;
      this.value = this.screenWidth - this.numero;
    }

    if(this.screenWidth >= 1201 && this.screenWidth <= 1600  ){
      const screenRange = 1600 - 1201;
      const numeroRange = 1290 - 970;
      const proportion = (this.screenWidth - 1201) / screenRange;
      this.numero = 970 + Math.round(numeroRange * proportion);
      this.value = this.screenWidth - this.numero;
      return;
    } else {
      this.numero = 970;
      this.value = this.screenWidth - this.numero;
    }

    if(this.screenWidth >= 1601 && this.screenWidth <= 2500  ){
      const screenRange = 2000 - 1601;
      const numeroRange = 1610 - 1290;
      const proportion = (this.screenWidth - 1601) / screenRange;
      this.numero = 1290 + Math.round(numeroRange * proportion);
      this.value = this.screenWidth - this.numero;
      return;
    } else {
      this.numero = 1290;
      this.value = this.screenWidth - this.numero;
    }

  }
 
  

}
