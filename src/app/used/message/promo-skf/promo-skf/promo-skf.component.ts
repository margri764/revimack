import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promo-skf',
  templateUrl: './promo-skf.component.html',
  styleUrls: ['./promo-skf.component.scss']
})
export class PromoSkfComponent implements OnInit {

  promo : string = ""
  
  constructor(
              private router : Router
  ) { }

  ngOnInit(): void {

    this.valueToHeightCarousel();
  }

  valueToHeightCarousel(){
    if (screen.width > 300 && screen.width <1199){
      this.promo = "./assets/usados/promo-skf-phone.png";
      return;
    }



    if (screen.width > 1200 ){
      this.promo = "./assets/usados/promo-skf.png";

      return;
    }

    if (screen.width > 1600 ){
      this.promo = "./assets/usados/promo-skf.png";
    
      return;
    }
  }
 


  closeComponent(){
      this.router.navigateByUrl('/usados-seleccionados/home-usados')
  }
}
