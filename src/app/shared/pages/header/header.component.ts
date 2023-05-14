import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@ViewChild ("top" , {static: true} ) top! : ElementRef;

  public phone : boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log('header');
    this.scrollToTop();

    (screen.width <= 575) ? this.phone= true : false;
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
