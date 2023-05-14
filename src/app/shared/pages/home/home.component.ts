import {Component, ElementRef, OnInit, ViewChild  } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

@ViewChild ("top" , {static: true} ) top! : ElementRef;
imgEcurow : string='';
phone : boolean = false;
    
constructor() {

  (screen.width <= 600) ? this.phone = true : this.phone = false;
}  


  ngOnInit(): void {

    this.scrollToTop();
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
}
