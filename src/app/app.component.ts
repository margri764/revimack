import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, filter, interval } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { SignupInviteComponent } from './shared/messages/signup-invite/signup-invite/signup-invite.component';
import { DataService } from './services/data/data.service';
import { log } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from './services/validator/validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toastLiveRegister! : bootstrap.Toast;
  toastLiveConfirm! : bootstrap.Toast;
  private offcanvasInstance: bootstrap.Offcanvas | null = null;
  title = 'revimack';
  disabled : boolean=false;
  phone : boolean = false;
  scroll! : boolean;
  id : boolean = false;
  isClicked : boolean = false;
  intervalId: any;
  private hasRegistered: any;
  private subscription!: Subscription;
  myForm! : FormGroup;
  invalidName:  boolean  = false;
  invalidCheck:  boolean  = false;
  invalidEmail: boolean = false;
  sendingEmail: boolean = false;


  constructor(
            public router : Router,
            private modalService: NgbModal,
            private dataService : DataService,
            private fb : FormBuilder,
            private validatorService : ValidatorService


  ){
    (screen.width <= 600) ? this.phone = true : this.phone = false;
    this.hasRegistered = localStorage.getItem("registered") ;

    
    this.myForm = this.fb.group({
      skf: [''],
      tractor: [''],
      fumigador: [''],
      check: [''],
    })  
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

    // se dispara al inicio, siempre y cuando no se haya registrado
    if(this.hasRegistered === null){
      setTimeout(()=>{
        this.showCustomToast();
      }, 5000)
    }

    this.dataService.modalSuccessSendendEmail.subscribe(() => {
      localStorage.setItem("registered", "ok")
      this.subscription.unsubscribe();
      this.showCustomToastConfirm();
      this.closeToast();
    });
    
    if(this.hasRegistered === null){
      this.subscription = interval(60000).subscribe(() => {
            this.showCustomToast();
        });
    }

    setTimeout(()=>{
      this.openSugestionOffCanvas();
    }, 2000)
    // }, 40000)
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

  validField( field: string ) {
    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }

  sendForm (){
    
    let check = null;
    // check = (<FormControl>this.myForm.controls['check']).value;
    // if ( this.myForm.invalid || check === null ) {
    //   this.myForm.markAllAsTouched();
    //   return;
    // }
    console.log(this.myForm.value);
 
  }



// Método para cerrar el Toast
closeToast() {
  if (this.toastLiveRegister) {
    this.toastLiveRegister.hide();
  }
}

showCustomToast() {
    const toastElement = document.getElementById('liveToast');
    if (toastElement) {
      toastElement.classList.add('custom-toast'); // Agregar la clase custom-toast al elemento
      this.toastLiveRegister = new bootstrap.Toast(toastElement, { delay: 30000 });
      this.toastLiveRegister.show();

    } else {
      console.error("No se encontró el elemento 'liveToast'.");
    }
}

showCustomToastConfirm() {
  const toastElement = document.getElementById('liveToast-confirm');
  if (toastElement) {
    toastElement.classList.add('custom-toast'); // Agregar la clase custom-toast al elemento
    this.toastLiveConfirm = new bootstrap.Toast(toastElement);
    this.toastLiveConfirm.show();
  } else {
    console.error("No se encontró el elemento 'liveToast-confirm'.");
  }
}

// Método para abrir el offcanvas
openSugestionOffCanvas() {
  const offcanvasElement = document.getElementById('offcanvasBottom');
  if (offcanvasElement) {
    this.offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement);
    this.offcanvasInstance.show();
  } else {
    console.error("No se encontró el elemento 'offcanvasBottom'.");
  }
}

}
