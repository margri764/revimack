import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-tractors',
  templateUrl: './home-tractors.component.html',
  styleUrls: ['./home-tractors.component.scss'],
})

export class HomeTractorsComponent implements OnInit, OnInit{
  


  @HostListener('window:scroll') onScroll(e: Event): void {
    console.log(this.getYPosition(e));
    (this.getYPosition(e) >= 3 ) ? this.scroll = true : this.scroll = false;
    (this.getYPosition(e) >= 25 ) ? this.scroll2 = true : this.scroll2 = false;
    (this.getYPosition(e) >= 40 ) ? this.scroll3 = true : this.scroll3 = false;
    (this.getYPosition(e) >= 55 ) ? this.scroll4 = true : this.scroll4 = false;
    (this.getYPosition(e) >= 68 ) ? this.scroll5 = true : this.scroll5 = false;
    (this.getYPosition(e) >= 75 ) ? this.scroll6 = true : this.scroll6 = false;
    
  }


  scroll : boolean = false;
  scroll2 : boolean = false;
  scroll3 : boolean = false;
  scroll4 : boolean = false;
  scroll5 : boolean = false;
  scroll6 : boolean = false;

  constructor( 
            ) 
  { 

  }



  ngOnInit(){

  }
  


  getYPosition(e: Event): number {
    const { scrollTop, scrollHeight, clientHeight } = e.target as Element;
    return ( (scrollTop / (scrollHeight - clientHeight)) * 100);
  }



 

}
