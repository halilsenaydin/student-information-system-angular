import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'app/models/dtoS/loginDto';
import { AuthService } from 'app/services/auth.service';
import { PersonService } from 'app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;

  roles = { 'teacher': 'profile/teacher', 'student': 'profile/student', 'admin': 'profile/admin' }
  constructor(private authService: AuthService,
    private personService: PersonService,
    private router: Router
  ) { }
  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    console.log(this.roles['teacher'])
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  login() {
    let loginDto: LoginDto
    this.authService.login(loginDto).subscribe(response => {
      this.personService.getClaimsByUserName(loginDto.password).subscribe(response => {
        for (const claim of response.data.operationClaims) {
          this.router.navigate([claim])
          break; // Bulunan ilk rolün component'ine yönlendirme yapıldı. 
        }
      })
    }, error => {
      console.log("Şifre Yanlış")
    })
  }
}
