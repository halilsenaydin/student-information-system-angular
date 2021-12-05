export interface TakingLectureView{
    // Primary Key: TakingLectures
    id:number

    // Foreign keys
    studentId:number
    teacherId:number
    semesterId:number

    // Props
    yearName:string
    semesterName:string
    lectureName:string
    lectureCode:string
    lectureTypeName:string
}