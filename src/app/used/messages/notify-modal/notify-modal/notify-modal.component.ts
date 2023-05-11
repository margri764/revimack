import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-notify-modal',
  templateUrl: './notify-modal.component.html',
  styleUrls: ['./notify-modal.component.scss']
})
export class NotifyModalComponent implements OnInit {

  
  @Input() data: any;

  dataToShow  :  string = '';
  start: boolean =true;  
  array: any []=[] 
  string:any;
  clicked:boolean= false;
  hidden: boolean = true;
  myForm! : FormGroup;
  public invalidName:  boolean  = false;
  public invalidPhone: boolean = false;
  public invalidEmail: boolean = false;
  public sendingEmail: boolean = true;


  constructor(
               private fb : FormBuilder,
               private route : Router,
               private _emailservice : EmailService

  ) { 

 
  }

  ngOnInit(): void {
    // this.dataToShow = this.data.data
    this.myForm = this.fb.group({
      name:    ['', [Validators.required]],
      email:   ['', [Validators.required,]],
      phone:   ['', [Validators.required]],
      message :['']
      });
      
  }


  validField( field: string ) {
 
    this.isInvalid(field);
    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }

  isInvalid(field: string){

    switch( field ) {
      case 'name':
        if ( this.myForm.controls['name'].errors && this.myForm.controls['name'].touched){
         this.invalidName = true;
        }else(this.invalidName = false)
      
       
         break;

      case 'phone':
        if ( this.myForm.controls['phone'].errors && this.myForm.controls['phone'].touched){
          this.invalidPhone = true;
         }else(this.invalidPhone = false)
        break;

      case 'email':
        if ( this.myForm.controls['email'].errors && this.myForm.controls['email'].touched){
          this.invalidEmail = true;
         }else(this.invalidEmail = false)
        break;
      default:
    }

  }
  
  sendForm (){
    // if ( this.myForm.invalid ) {
    //   this.myForm.markAllAsTouched();
    //   return;
    // }
    this.sendingEmail=false;
      this._emailservice.sendEmail(this.myForm.value).subscribe(
        res =>{ if(res == "true"){
               this.sendingEmail=true;
                 
              setTimeout( ()=>{
                this.route.navigateByUrl("/gracias")

              },3000)


        }}
      )

  }

  




}
