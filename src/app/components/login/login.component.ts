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
        this.personService.getClaimsByUserName(loginDto.userName).subscribe(responseForClaims => {
          const roles = { 'teacher': 'profile/teacher', 'student': 'profile/student', 'admin': 'profile/admin' }
          localStorage.setItem("token",response.data.token)
       
          const claims = responseForClaims.data.operationClaims  
          
          for (let claim of claims) {
            console.log(roles[claim["claimName"]])
            this.router.navigate([roles[claim["claimName"]]])
            break; // Bulunan ilk rolün component'ine yönlendirme yapıldı. 
          }
        })
      })
    }

    else{
      // Form Geçersiz
    }
  }
}
