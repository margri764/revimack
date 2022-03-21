import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'revimack';
  public disabled : boolean=false;

  constructor(
            public router : Router
  ){}


  ngOnInit(): void {
    
    setTimeout(()=>{

      this.disabled = true

    },4000)
  
  }




}