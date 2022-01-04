import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { DepartmentService } from 'app/services/department.service';
import { AcademicUnit } from 'app/models/entities/academicUnit';
import { Department } from 'app/models/entities/department';
import { AcademicUnitService } from 'app/services/academic-unit.service';

@Component({
  selector: 'app-modal-content',
  template: `
    <!-- Modal Header -->
    <div class="modal-header">
        <h5 class="modal-title text-center">Bölüm Ekle</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
      <form [formGroup]="departmentForm">
        <div class="form-group">
          <label for="academicUnitId">Akademik Birim</label>
          <select formControlName="academicUnitId" type="text" class="form-control" id="academicUnitId">
              <option *ngFor="let academicUnit of academicUnits" [ngValue]=academicUnit.id>
                  {{academicUnit.academicUnitName}} </option>
          </select>

          <label for="departmentName">Bölüm İsmi</label>
          <input formControlName="departmentName" name="departmentName" type="text" id="departmentName" class="form-control">
        </div>
      </form>
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Boş</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link"(click)="addDepartment()">Bölümü Ekle</button>
        </div>
    </div>
    `
})
export class NgbdModalContent implements OnInit {
  @Input() name;
  departmentForm: FormGroup
  academicUnits: AcademicUnit[]
  constructor(public activeModal: NgbActiveModal,
    private departmentService: DepartmentService,
    private formBuilder: FormBuilder,
    private academicUnitService: AcademicUnitService
  ) { }

  ngOnInit(): void {
    this.getAcademicUnits()
    this.createDepartmentForm()
  }

  createDepartmentForm() {
    this.departmentForm = this.formBuilder.group({
      academicUnitId: ["", Validators.required],
      departmentName: ["", Validators.required]
    })
  }


  addDepartment() {
    if (this.departmentForm.valid) {
      let department: Department = Object.assign({}, this.departmentForm.value);
      department.academicUnitId = Number(this.departmentForm.value["academicUnitId"])
      this.departmentService.add(department).subscribe(response => {
        console.log("Bölüm başarılı bir şekilde eklendi.")
      })
    }
  }

  getAcademicUnits() {
    this.academicUnitService.getAll().subscribe(response => {
      this.academicUnits = response.data;
    })
  }
}

@Component({
  selector: 'app-modal-add-department',
  templateUrl: './modal-add-department.component.html',
  styleUrls: ['./modal-add-department.component.css']
})
export class ModalAddDepartmentComponent {

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

}
