import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public phone : boolean=false;
  constructor() { }

  ngOnInit(): void {

    (screen.width <= 575) ? this.phone= true : false;
  }

}
