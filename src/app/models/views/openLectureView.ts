export interface OpenLectureView {
    // Primary Key: OpenLectures
    id: number

    // Foreign keys
    teacherId: number
    semesterId: number

    // Props
    yearName: string
    semesterName: string
    lectureName: string
    lectureCode: string
    class: number
    lectureTypeName: string
    educationType: string
    departmentName: string
}