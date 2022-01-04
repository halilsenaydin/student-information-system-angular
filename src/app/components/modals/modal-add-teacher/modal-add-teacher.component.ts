import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Denotation } from 'app/models/entities/denotation';
import { Department } from 'app/models/entities/department';
import { DepartmentService } from 'app/services/department.service';
import { DenotationService } from 'app/services/denotation.service';
import { RegisterTeacherDto } from 'app/models/dtoS/registerTeacherDto';
import { AuthService } from 'app/services/auth.service';


@Component({
  selector: 'app-modal-content',
  template: `
    <!-- Modal Header -->
    <div class="modal-header">
        <h5 class="modal-title text-center">Öğretim Elemanı Ekle</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
      <form [formGroup]="registerTeacherForm">
       <div class="form-group">
          <label for="denotationId">Öğretim Elemanının Ünvanı</label>
          <select formControlName="denotationId" type="text" class="form-control" id="denotationId">
              <option *ngFor="let denotation of denotations" [ngValue]=denotation.id>
                  {{denotation.denotationName}} </option>
          </select>

          <label for="departmentId">Öğretim Elemanının Bölümü</label>
          <select formControlName="departmentId" type="text" class="form-control" id="departmentId">
              <option *ngFor="let department of departments" [ngValue]=department.id>
                  {{department.departmentName}} </option>
          </select>
        </div>
        <div class="form-group">
          <label for="identityNumber">TC No</label>
          <input formControlName="identityNumber" name="identityNumber" type="text" id="identityNumber" class="form-control">

          <label for="firstName">İsim</label>
          <input formControlName="firstName" name="firstName" type="text" id="firstName" class="form-control">

          <label for="lastName">Soyisim</label>
          <input formControlName="lastName" name="lastName" type="text" id="lastName" class="form-control">
        </div>
      </form>
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Boş</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link"(click)="register()">Öğretim Elemanını Ekle</button>
        </div>
    </div>
    `
})
export class NgbdModalContent implements OnInit{
  @Input() name;
  registerTeacherForm:FormGroup;
  denotations:Denotation[]
  departments:Department[]
  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private departmentService:DepartmentService,
              private denotationService:DenotationService,
              private authService:AuthService

  ) { }
  ngOnInit(): void {
    this.createRegisterForm()
    this.getDenotations()
    this.getDepartments()
  }

  createRegisterForm(){
    this.registerTeacherForm = this.formBuilder.group({
      denotationId : ["", Validators.required],
      departmentId : ["", Validators.required],
      firstName : ["", Validators.required],
      lastName : ["", Validators.required],
      identityNumber : ["", Validators.required],
    })
  }

  getDepartments(){
    this.departmentService.getAll().subscribe(response=>{
      this.departments = response.data;
    })
  }

  getDenotations(){
    this.denotationService.getAll().subscribe(response=>{
      this.denotations = response.data;
    })
  }

  register(){
    if(this.registerTeacherForm.valid){
      let teacher:RegisterTeacherDto = Object.assign({}, this.registerTeacherForm.value);
      this.authService.registerForTeacher(teacher).subscribe(response=>{
        console.log("Kayıt Başarılı")
      })
    }
  }
}

@Component({
  selector: 'app-modal-add-teacher',
  templateUrl: './modal-add-teacher.component.html',
  styleUrls: ['./modal-add-teacher.component.css']
})
export class ModalAddTeacherComponent {
  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
