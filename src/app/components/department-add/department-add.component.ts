import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { AcademicUnit } from 'app/models/entities/academicUnit';
import { Department } from 'app/models/entities/department';
import { AcademicUnitService } from 'app/services/academic-unit.service';
import { DepartmentService } from 'app/services/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  departmentForm: FormGroup
  academicUnits: AcademicUnit[]
  constructor(
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
        this.departmentForm.reset()
      })
    }
  }

  getAcademicUnits() {
    this.academicUnitService.getAll().subscribe(response => {
      this.academicUnits = response.data;
    })
  }

}
