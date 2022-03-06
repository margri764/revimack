import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarOpen : boolean = false;
  public spinnerOn : boolean = false;

  constructor(
            private router : Router
  ) { }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(evt => evt instanceof NavigationEnd))  
    .subscribe((evt) => {
      this.navbarOpen = false;
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
 
 }
}
