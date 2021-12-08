import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'app/models/dtoS/loginDto';
import { AuthService } from 'app/services/auth.service';
import { PersonService } from 'app/services/person.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;

  loginForm:FormGroup;
  roles = { 'teacher': 'profile/teacher', 'student': 'profile/student', 'admin': 'profile/admin' }
  constructor(private authService: AuthService,
    private personService: PersonService,
    private router: Router,
    private formBuilder:FormBuilder
  ) { }
  
  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.createLoginForm()
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName:["", Validators.required],
      password:["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let loginDto: LoginDto = Object.assign({}, this.loginForm.value)
      this.authService.login(loginDto).subscribe(response => {
        this.personService.getClaimsByUserName(loginDto.password).subscribe(responseForClaims => {
          localStorage.setItem("token",response.data.token)
          for (const claim of responseForClaims.data.operationClaims) {
            this.router.navigate([claim])
            break; // Bulunan ilk rolün component'ine yönlendirme yapıldı. 
          }
        })
      }, error => {
        console.log("Şifre Yanlış")
      })
    }

    else{
      // Form Geçersiz
    }
  }
}
