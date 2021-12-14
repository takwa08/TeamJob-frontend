import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterRequest } from '../Model/RegisterRequest';
import { RegisterRequestService } from '../services/register-request.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})
export class AuthComponent implements OnInit {
  private registerRequest=new RegisterRequest();
  formEtudiant:FormGroup;
  constructor(private fb : FormBuilder,private registerRequestService:RegisterRequestService,private _route:Router) {

    this.formEtudiant=this.fb.group(
      { email:['',
      [Validators.required,Validators.email,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],

      password: ['',
        [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)]
      ],
      username: ['',
      [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12)]
    ],
    confirmPassword:['',Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12),
    this.validatorConfirmedPassword("password")]
    }
    );
   }
     validatorConfirmedPassword(fieldName: string): ValidatorFn {
    return (control: AbstractControl) => {
        if (!control.value) return null;

        return control.value == control.root.get(fieldName).value ? null : { someError: true };
    }
  }
getUsername()
{return this.formEtudiant.get("username").value;}

getEmail()
{return this.formEtudiant.get("email").value;}

getPassword()
{return this.formEtudiant.get("password").value;}

getConfirmPassword()
{ return this.formEtudiant.get("confirmPassword").value;}

  ngOnInit(): void {

  }


public registerMethod()
{
  console.log(this.formEtudiant.value);

  this.registerRequest.setEmail=this.getEmail();
  this.registerRequest.setUsername=this.getUsername();
  this.registerRequest.setPassword=this.getPassword();
  this.registerRequestService.Register(this.registerRequest).subscribe(
    ()=>{

      this._route.navigateByUrl('/profil');
    }
  ),(error:HttpErrorResponse)=>
  {
    if(error.status==404)
    {
     console.log("error ! ")
    }
  }
}

}
