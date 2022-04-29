import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-metalpaz',
  templateUrl: './metalpaz.component.html',
  styleUrls: ['./metalpaz.component.scss']
})
export class MetalpazComponent implements OnInit {

  @ViewChild ("top" , {static: true} )     top! : ElementRef;

phone: boolean=false;

constructor() { }

  goToTop(){

    setTimeout( () => {

      this.top.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      }, 0);
  }



  ngOnInit(): void {
    this.goToTop();
    (screen.width <= 575) ? this.phone= true : false;

  }
}
