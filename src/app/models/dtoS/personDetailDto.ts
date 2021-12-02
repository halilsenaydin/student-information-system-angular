import { ProfilePicture } from "../entities/profilePicture";
import { DepartmentDetailDto } from "./departmentDetailDto";

export interface PersonDetailDto{
    id : number
    identityNumber : string
    firstName : string
    lastName : string
    email : string
    departmentDetail : DepartmentDetailDto
    profilePicture:ProfilePicture
}