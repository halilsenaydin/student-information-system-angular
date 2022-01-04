import { Curriculum } from "../entities/curriculum";
import { LectureType } from "../entities/lectureType";
import { TypeOfEducation } from "../entities/typeOfEducation";
import { LectureContent } from "../entities/lectureContent";
import { DepartmentDetailDto } from "./departmentDetailDto";

export interface LectureDetailDto{
    id : number
    class : number
    lectureName : string
    lectureCode : string
    departmentDetail : DepartmentDetailDto
    typeOfEducation : TypeOfEducation
    curriculum : Curriculum
    lectureType : LectureType
    lectureContents:LectureContent[]
}