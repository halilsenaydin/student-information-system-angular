import { LetterGradeType } from "../entities/letterGradeType";
import { TakingLectureDetailDto } from "./takingLectureDetailDto";

export interface LetterGradeDetailDto{
    id : number
    takingLectureDetail : TakingLectureDetailDto
    letterGradeType : LetterGradeType
}