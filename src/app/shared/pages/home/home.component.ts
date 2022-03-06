import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public imgEcurow : string='';

  constructor() { }

  ngOnInit(): void {

    (screen.width<600) ?  this.imgEcurow="./assets/ecuRow_cel.png" :     this.imgEcurow="./assets/ecuRow-desktop.png";
    // if(screen.width > 961 && screen.width <= 1280){
    //  this.imgEcurow="./assets/ecuRow-desktop.png";

    //  (screen.width > 300 && screen.width < 700) ?
    //   [this.bufferX = 100, this.bufferY = 100]         
    //   :[ this.bufferX = 15, this.bufferY = 15]
    
      


  }


 
  
}
