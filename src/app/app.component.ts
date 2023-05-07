import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

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
  id : boolean = false;


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

    this.router.events
    .pipe(filter(evt => evt instanceof NavigationEnd))  
    .subscribe((event: any) => {
     (event.url.includes('/usados-seleccionados/home-usados/')) 
     ?  this.id = true : this.id = false;
     
    });
  
    
    // setTimeout(()=>{

    //   this.disabled = true

    // },4000);
    
    (screen.width <= 575) ? this.phone = true : false;
  }




}
