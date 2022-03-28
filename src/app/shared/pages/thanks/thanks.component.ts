import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  constructor(
              private route : Router
  ) { }

  ngOnInit(): void {

    setTimeout(()=>{

      this.route.navigateByUrl("/home")

    },6000)
  
  }

  }


