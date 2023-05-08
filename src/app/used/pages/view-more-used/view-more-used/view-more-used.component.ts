import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-view-more-used',
  templateUrl: './view-more-used.component.html',
  styleUrls: ['./view-more-used.component.scss']
})
export class ViewMoreUsedComponent implements OnInit {

arrItems : any ;
item : any;
phone : boolean = false;

value : number = 250;
banner : string = '';
img1 : string = '';
img2 : string = '';
img3 : string = '';
img4 : string = '';
img5 : string = '';

  constructor(
              private activatedRoute : ActivatedRoute,
              private dataService : DataService
  ) { 

        (screen.width <= 575) ? this.phone = true : false; 
        this.activatedRoute.params.subscribe(
          ({id, category})=>{
                this.arrItems = this.dataService.getMachinesById(id, category);
                this.item = this.arrItems[0];
                console.log(this.arrItems);
              }
        )
  }

  ngOnInit(): void {
    this.mainImg();
    this.valueToHeightCarousel();
    this.arrItems

  }
  
  mainImg() {
    const length = this.arrItems.length;
    if (length > 0) {
      this.img1 = this.arrItems[0].img;
    }

    if (length > 1) {
      this.img2 = this.arrItems[1].img;
    } else {
      this.img2 = this.img1;
      this.img3 = this.img1;
      this.img4 = this.img1;
      this.img5 = this.img1;
      return; 
    }

    if (length > 2) {
      this.img3 = this.arrItems[2].img;
    } else {
      this.img3 = this.img2;
      this.img4 = this.img2;
      this.img5 = this.img2;
      return; 
    }

    if (length > 3) {
      this.img4 = this.arrItems[3].img;
    } else {
      this.img4 = this.img3;
      this.img5 = this.img3;
      return; 
    }
    
    if (length > 4) {
      this.img5 = this.arrItems[4].img;
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
    if(screen.width > 300 && screen.width < 574){
       this.value = 160;
       this.banner = "assets/usados/banner-negocios-phone.png"
       return;
    }

    if(screen.width > 768 && screen.width < 1200){
      this.value = 200;
      this.banner = "assets/usados/banner-negocios.png"
      return;
    }

    if(screen.width > 1200 ){
      this.value = 350;
      this.banner = "assets/usados/banner-negocios.png"



      return;
    }

    if (screen.width > 1600 ){
      this.value = 350;
      return;
    }
  }
 
  

}
