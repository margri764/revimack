import {  AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit,  } from '@angular/core';
import { fromEvent, map, tap } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy,AfterViewInit {




public imgEcurow : string='';





    
constructor()
{  }
   

		
    	
  ngAfterViewInit(): void {

 
  }
	


	ngOnDestroy(): void {
	   
	}

  ngOnInit(): void {


    (screen.width<600) ?  this.imgEcurow="./assets/ecuRow_cel.png" :     this.imgEcurow="./assets/ecuRow-desktop.png";
  
    
      


  }


 
  
}
