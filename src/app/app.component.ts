import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'revimack';
  disabled : boolean=false;
  phone : boolean = false;
  scroll! : boolean;


  constructor(
            public router : Router
  ){}


  ngOnInit(): void {

    this.router.events
    .pipe(filter(evt => evt instanceof NavigationEnd))  
    .subscribe((event: any) => {
     (event.url.includes('/maquinaria-agricola/tractores')) 
     ?  this.scroll=false : this.scroll=true;
     
    });
  
    
    // setTimeout(()=>{

    //   this.disabled = true

    // },4000);
    
    (screen.width <= 575) ? this.phone= true : false;
  }




}
