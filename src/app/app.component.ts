import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, filter, interval } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { SignupInviteComponent } from './shared/messages/signup-invite/signup-invite/signup-invite.component';
import { DataService } from './services/data/data.service';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toastLiveExample! : bootstrap.Toast;
  title = 'revimack';
  disabled : boolean=false;
  phone : boolean = false;
  scroll! : boolean;
  id : boolean = false;
  isClicked : boolean = false;
  intervalId: any;
  private hasRegistered: any;
  private subscription!: Subscription;


  constructor(
            public router : Router,
            private modalService: NgbModal,
            private dataService : DataService

  ){
    (screen.width <= 600) ? this.phone = true : this.phone = false;
    this.hasRegistered = localStorage.getItem("registered") ;
  }


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
    //  event.url.includes('/usados-seleccionados/home-usados') ?  this.id = true : this.id = false;
     event.url.includes('/home') ?  this.id = true : this.id = false;
    });
    
    this.dataService.modalSuccessSendendEmail.subscribe(() => {
      localStorage.setItem("registered", "ok")
      this.subscription.unsubscribe();
    });
    
    if(this.hasRegistered === null){
      this.subscription = interval(5000).subscribe(() => {
            console.log('aaa');
            this.showCustomToast();
        });
    }
  }


  openModal() {

    this.isClicked = !this.isClicked;
    const modalOptions: NgbModalOptions = {
      backdrop: "static",
      centered: true
    };
  
    const modalRef = this.modalService.open(SignupInviteComponent, modalOptions);
    modalRef.componentInstance.data = { data: "cosechadora" };
  }


  showCustomToast() {

    // if(!this.isClicked){
      const toastElement = document.getElementById('liveToast');
      if (toastElement) {
        toastElement.classList.add('custom-toast'); // Agregar la clase custom-toast al elemento
        this.toastLiveExample = new bootstrap.Toast(toastElement);
        this.toastLiveExample.show();

        const tiempoCierre = 10000;
    
        // Ocultar el toast después de cierto tiempo
        setTimeout(() => {
          this.toastLiveExample.hide();
        }, tiempoCierre);
      } else {
        console.error("No se encontró el elemento 'liveToast'.");
      }
  // }
  }
  
  showCustomToastConfirm() {
    const toastElement = document.getElementById('liveToast-confirm');
    if (toastElement) {
      toastElement.classList.add('custom-toast'); // Agregar la clase custom-toast al elemento
      this.toastLiveExample = new bootstrap.Toast(toastElement);
      this.toastLiveExample.show();
    } else {
      console.error("No se encontró el elemento 'liveToast'.");
    }
  }


}
