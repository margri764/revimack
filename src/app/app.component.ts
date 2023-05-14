import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { SignupInviteComponent } from './shared/messages/signup-invite/signup-invite/signup-invite.component';

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



  constructor(
            public router : Router,
            private modalService: NgbModal,

  ){
    (screen.width <= 600) ? this.phone = true : this.phone = false;

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
    
    setInterval(()=>{

      this.showCustomToast();
      
    }, 10000)
    
  }


  openModal() {
    const modalOptions: NgbModalOptions = {
      backdrop: "static",
      centered: true
    };
  
    const modalRef = this.modalService.open(SignupInviteComponent, modalOptions);
    modalRef.componentInstance.data = { data: "cosechadora" };
  }

  showCustomToast() {
    const toastElement = document.getElementById('liveToast');
    if (toastElement) {
      toastElement.classList.add('custom-toast'); // Agregar la clase custom-toast al elemento
      this.toastLiveExample = new bootstrap.Toast(toastElement);
      this.toastLiveExample.show();
      // Configurar el tiempo de cierre del toast en milisegundos (ejemplo: 3000 ms = 3 segundos)
      const tiempoCierre = 3000;
  
      // Ocultar el toast después de cierto tiempo
      setTimeout(() => {
        this.toastLiveExample.hide();
      }, tiempoCierre);
    } else {
      console.error("No se encontró el elemento 'liveToast'.");
    }
  }
  


}
