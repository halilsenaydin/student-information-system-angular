import { AcademicUnitType } from "../entities/academicUnitType";

export interface AcademicUnitDetailDto{
    id:number
    academicUnitName : string
    academicUnitType : AcademicUnitType
}