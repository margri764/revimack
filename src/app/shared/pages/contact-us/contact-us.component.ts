import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public showmap : boolean= true;
  public shownavbar : boolean = false;
  constructor() { }


  ngOnInit(): void {
  (screen.width <=600) ? [this.showmap = false, this.shownavbar= true] : [this.showmap= true , this.shownavbar=false];
  }

}
