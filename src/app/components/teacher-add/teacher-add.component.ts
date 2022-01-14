import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Denotation } from 'app/models/entities/denotation';
import { Department } from 'app/models/entities/department';
import { DepartmentService } from 'app/services/department.service';
import { DenotationService } from 'app/services/denotation.service';
import { RegisterTeacherDto } from 'app/models/dtoS/registerTeacherDto';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;

  registerTeacherForm: FormGroup;
  denotations: Denotation[]
  departments: Department[]
  constructor(private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private denotationService: DenotationService,
    private authService: AuthService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    
    this.createRegisterForm()
    this.getDenotations()
    this.getDepartments()
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  createRegisterForm() {
    this.registerTeacherForm = this.formBuilder.group({
      denotationId: ["", Validators.required],
      departmentId: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      identityNumber: ["", Validators.required],
    })
  }

  getDepartments() {
    this.departmentService.getAll().subscribe(response => {
      this.departments = response.data;
    })
  }

  getDenotations() {
    this.denotationService.getAll().subscribe(response => {
      this.denotations = response.data;
    })
  }

  register() {
    if (this.registerTeacherForm.valid) {
      let teacher: RegisterTeacherDto = Object.assign({}, this.registerTeacherForm.value);
      this.authService.registerForTeacher(teacher).subscribe(response => {
        console.log("Kayıt Başarılı")
      })
    }
  }

}
