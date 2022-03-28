import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Params, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarOpen : boolean = false;
  public spinnerOn : boolean = false;
  public phone : boolean = false;
  public routerLinkImplements = "";

  constructor(
            private router : Router,
            private _activatedRoute: ActivatedRoute,
  ) { }


  

  ngOnInit(): void {

  

 
    (screen.width <= 575) ? this.phone = true : false; 
  }


}
