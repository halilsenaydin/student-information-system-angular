import { Curriculum } from "../entities/curriculum";
import { PersonDetailDto } from "./personDetailDto";

export interface StudentDetailDto{
    id : number
    class : string
    agno : number
    status : boolean
    personDetail : PersonDetailDto
    curriculum : Curriculum
}