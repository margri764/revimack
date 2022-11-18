import {Component, OnInit  } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

public imgEcurow : string='';
    
constructor()
{  }
    	


  ngOnInit(): void {

    // (screen.width<575) ?  this.imgEcurow="./assets/ecuRow_cel.png" :     this.imgEcurow="./assets/ecuRow-desktop.png";

  }
  
}
