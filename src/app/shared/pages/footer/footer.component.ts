import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  isHovering : boolean = false;


  constructor() { }

  isHover(){
    this.isHovering= !this.isHovering;
  }

  ngOnInit(): void {

    console.log(screen.width)
  }

}
