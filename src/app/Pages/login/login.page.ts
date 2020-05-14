import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;

  error_messages={
    'userName':[
      {type: 'required', message:'UserName is required'},
      {type: 'minLength', message:'minLength is 5'}
    ],
    'password':[
      {type: 'required', message:'Password is required'}
     
    ],
  }

  constructor(
    public formBuilder: FormBuilder) { 
    this.LoginForm = this.formBuilder.group({
      userName : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      password :new FormControl('',Validators.compose([
        Validators.required
       
      ]))
    });

  }

  passwordType: string = 'password';
  passwordIcon: string = 'eye-outline';
  
 
  hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-outline' ? 'eye-off-outline' : 'eye-outline';
  }



  ngOnInit() {
  }

}
