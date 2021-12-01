import { Country } from "../entities/country";
import { PersonDetailDto } from "./personDetailDto";

export interface ForeignStudentDetailDto{
    id : number
    personDetail : PersonDetailDto
    country : Country
}