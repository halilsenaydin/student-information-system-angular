import { ExamType } from "../entities/examType";
import { StudentDetailDto } from "./studentDetailDto";
import { TakingLectureDetailDto } from "./takingLectureDetailDto";

export interface ExamDetailDto{
    id : number
    point : number
    effektRate : number
    examDate  : Date
    ReleaseDate : Date
    studentDetail : StudentDetailDto
    takingLectureDetail : TakingLectureDetailDto
    examType : ExamType
}