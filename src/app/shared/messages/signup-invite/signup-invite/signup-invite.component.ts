import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data/data.service';
import { EmailService } from 'src/app/services/email/email.service';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-signup-invite',
  templateUrl: './signup-invite.component.html',
  styleUrls: ['./signup-invite.component.scss']
})
export class SignupInviteComponent implements OnInit {

  // @Input() data: any;

  // dataToSave : string = '';
  start: boolean =true;  
  array: any []=[] 
  string:any;
  clicked:boolean= false;
  hidden: boolean = true;
  myForm! : FormGroup;
  invalidName:  boolean  = false;
  invalidCheck:  boolean  = false;
  invalidEmail: boolean = false;
  sendingEmail: boolean = false;

  showToast: boolean = false;
  toastLiveExample! : bootstrap.Toast;
  toastMessage: string = '';


  constructor(
               private fb : FormBuilder,
               private modalService: NgbModal,
               private validatorService : ValidatorService,
               private route : Router,
               private dataService : DataService,
               private emailService : EmailService

  ) { 

  }


  ngOnInit(): void {
    // const dataToSave = this.data.data;


    this.myForm = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email:   ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
      check:   [ , [Validators.required]],
      // dataToSave:   [dataToSave ],
      });
  }
  
  closeModal(){
    this.modalService.dismissAll()

  }

  validField( field: string ) {
    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }



  sendForm (){
    
    let check = null;
    check = (<FormControl>this.myForm.controls['check']).value;
    if ( this.myForm.invalid || check === null ) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.sendingEmail = true;
      this.dataService.sendEmailRegister(this.myForm.value).subscribe(
        res =>{ if(res == "true"){
               this.sendingEmail = false;
               this.closeModal(); 
               this.dataService.dontShowModalRegister.emit(false);
        }}
      )
  }


}


