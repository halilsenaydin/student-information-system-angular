export interface ExamView{
    // Primary Key: Exams
    id:number

    // Foreign keys: Exams
    studentId:number
    takingLectureId:number
    examTypeId:number
    semesterId:number

    // Props
    point:number
    effektRate:number
    examDate:Date
    releaseDate:Date
    yearName:string
    semesterName:string
    lectureName:string
    lectureCode:string
    examTypeName:string
    letterGradeName:string
}