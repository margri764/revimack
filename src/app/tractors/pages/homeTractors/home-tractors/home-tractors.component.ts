import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, map, Subject, Subscriber, Subscription, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-home-tractors',
  templateUrl: './home-tractors.component.html',
  styleUrls: ['./home-tractors.component.scss'],
  
})
export class HomeTractorsComponent implements OnInit, OnInit, OnDestroy {
  


  @HostListener('window:scroll') onScroll(e: Event): void {
    console.log(this.getYPosition(e));
    (this.getYPosition(e) >= 400 && this.getYPosition(e) <= 1200 ) ? this.scroll = true : this.scroll = false;
 }

  // @HostListener("scroll", ["$event"])
  
  //  onScroll ($event: any ) {
  //   const { scrollTop, scrollHeight, clientHeight } = $event.srcElement;
  //   let number =( (scrollTop / (scrollHeight - clientHeight)) * 100);
  //   console.log(number);

  //   (number > 26 && number < 27) ? alert('50') : "";
  // }

  scrollSubscription! : Subscription;
  scroll : boolean = false;

  constructor( 
              private renderer2: Renderer2
  ) 
  { 

  }


  ngOnDestroy(): void {

  }
  


  ngOnInit(){

  }
  


  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }



 

}
