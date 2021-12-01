import { AcademicUnitDetailDto } from "./academicUnitDetailDto";

export interface DepartmentDetailDto{
    id : number
    departmentName : string
    academicUnitDetail : AcademicUnitDetailDto
}