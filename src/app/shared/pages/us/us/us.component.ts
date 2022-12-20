import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  public imgRev : string='';

  constructor() { }

  ngOnInit(): void {
  
    (screen.width <=575 ) ? this.imgRev="assets/revimack-540×300.png" : this.imgRev="assets/revimack-1600×800.jpg" 

  }

}
