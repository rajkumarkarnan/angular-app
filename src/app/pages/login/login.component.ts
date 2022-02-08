import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private formSubmitAttempt!: boolean;
  userName : any;
  loginForm = new FormGroup({
  
  username : new FormControl('',[
      Validators.required, 
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    password : new FormControl('',[Validators.required, Validators.minLength(6)])
  })
  
  constructor(
    private router: Router, 
    public formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onSubmit(){
    console.warn(this.loginForm.value)
    this.userName = this.loginForm.get('username')
    console.log(this.userName)
    sessionStorage.setItem("username",this.userName.value);
    this.router.navigate(['home']);

    if (this.userName.valid) {
      this.authService.login(this.userName.value);
    }
    this.formSubmitAttempt = true;
  }
  
}
