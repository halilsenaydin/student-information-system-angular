import { Denotation } from "../entities/denotation";
import { PersonDetailDto } from "./personDetailDto";

export interface TeacherDetailDto{
    id : number
    personDetail : PersonDetailDto
    denotation : Denotation
}