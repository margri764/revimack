import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Params, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen : boolean = false;
  spinnerOn : boolean = false;
  phone : boolean = false;

  constructor(
            private router : Router,
  ) { 

    (screen.width <= 575) ? this.phone = true : false; 
  }


  ngOnInit(): void {

  }


}
