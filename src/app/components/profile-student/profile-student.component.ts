import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Api } from "app/constants/api";
import { StudentDetailDto } from "app/models/dtoS/studentDetailDto";
import { Semester } from "app/models/entities/semester";
import { ExamView } from "app/models/views/examView";
import { ExamService } from "app/services/exam.service";
import { SemesterService } from "app/services/semester.service";
import { StudentService } from "app/services/student.service";
import * as Rellax from "rellax";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-profile-student",
  templateUrl: "./profile-student.component.html",
  styleUrls: ["./profile-student.component.css"],
})
export class ProfileStudentComponent implements OnInit {
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
    },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
    },
  ];

  data: Date = new Date();
  focus;
  focus1;

  semesterForm: FormGroup;

  url: string = `${Api.root}`;
  studentDetail: StudentDetailDto;
  examView: ExamView[];
  semesters: Semester[];
  constructor(private studentService: StudentService,
    private examService: ExamService,
    private activatedRoot: ActivatedRoute,
    private semesterService: SemesterService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    var rellaxHeader = new Rellax(".rellax-header");

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");

    // Arrive Params In Address Bar
    this.activatedRoot.params.subscribe((params) => {
      this.getStudent(params["userName"])
    })

    this.getSemesters();
    this.createSemesterForm();
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }

  // Forms
  createSemesterForm() {
    this.semesterForm = this.formBuilder.group({
      semesterId: ["", Validators.required]
    })
  }

  // Buttons Event
  showSemesters() {
    if (this.semesterForm.valid) {
      this.getExamResultsOfStudentBySemesterId(this.studentDetail.id, this.semesterForm.value["semesterId"])
    }
  }

  // Get Datas
  getStudent(userName: string) {
    this.studentService.getDtoByUserName(userName).subscribe((response) => {
      this.studentDetail = response.data;
    });
  }

  getExamResultsOfStudentBySemesterId(studentId: number, semesterId: number) {
    this.examService.getAllViewByStudentIdAndSemesterId(studentId, semesterId).subscribe(response => {
      this.examView = response.data;
    })
  }

  getSemesters() {
    this.semesterService.getAll().subscribe(response => {
      this.semesters = response.data;
    })
  }
}
