import { OpenLectureDetailDto } from "./openLectureDetailDto";
import { StudentDetailDto } from "./studentDetailDto";

export interface TakingLectureDetailDto{
    id : number
    studentDetail : StudentDetailDto
    openLectureDetail : OpenLectureDetailDto
}