import { Semester } from "../entities/semester";
import { LectureDetailDto } from "./lectureDetailDto";
import { TeacherDetailDto } from "./teacherDetailDto";

export interface OpenLectureDetailDto{
    id : number
    status : boolean
    lectureDetail : LectureDetailDto
    teacherDetail : TeacherDetailDto
    semester : Semester
}