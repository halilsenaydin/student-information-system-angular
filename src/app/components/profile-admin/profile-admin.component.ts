import { Component, OnInit } from '@angular/core';
import { StudentService } from 'app/services/student.service';
import { TeacherService } from 'app/services/teacher.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  teacherCount:number
  studentCount:number
  constructor(private teacherService:TeacherService,
              private studentService:StudentService
              ) {}

  ngOnInit(): void {
    this.getStudentCount();
    this.getTeacherCount();
  }

  getStudentCount(){
    this.studentService.getAllCount().subscribe(response=>{
      this.studentCount = response.data
    })
  }

  getTeacherCount(){
    this.teacherService.getAllCount().subscribe(response=>{
      this.teacherCount = response.data
    })
  }
}
