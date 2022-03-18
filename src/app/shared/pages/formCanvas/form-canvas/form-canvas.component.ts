import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-canvas',
  templateUrl: './form-canvas.component.html',
  styleUrls: ['./form-canvas.component.scss']
})
export class FormCanvasComponent implements OnInit {

  start: boolean =true;  
  array: any []=[] 
  string:any;
  clicked:boolean= false;
  hidden: boolean = true;
  public invalidName:  boolean  = false;
  public invalidPhone: boolean = false;
  public invalidEmail: boolean = false;
  
  

  myForm:FormGroup = this.fb.group({
    name:    ['', [Validators.required]],
    email:   ['', [Validators.required,]],
    phone:   ['', [Validators.required]],
    message :['']
    });
    
  constructor(
               private fb : FormBuilder,
               private route : Router

  ) { }

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
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    
    setTimeout( ()=>{
      this.route.navigateByUrl("/gracias")

    },2000)
  


    this.clicked=false; 
    // alert(JSON.stringify(this.myForm.value))
  }

  
onCloseSeguir(){


  
  }

  ngOnInit(): void {
  }

}
