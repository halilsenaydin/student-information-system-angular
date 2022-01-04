import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LectureDetailDto } from 'app/models/dtoS/lectureDetailDto';
import { LectureService } from 'app/services/lecture.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.css']
})
export class LectureDetailComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;

  lectureDetail:LectureDetailDto;

  constructor(private lectureService:LectureService,
              private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    // Activated Route
    this.activatedRoute.params.subscribe((params)=>{
      this.getLectureDetail(params["lectureId"]);
    })
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  getLectureDetail(lectureId:number){
    this.lectureService.getDto(lectureId).subscribe(response=>{
      this.lectureDetail = response.data;
      console.log(response.data)
    })
  }

  // Is data null
  isDataNull(array:[]){
    if(!array.length){
      return true;
    }

    return false;
  }
}
