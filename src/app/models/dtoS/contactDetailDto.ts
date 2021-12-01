import { PersonDetailDto } from "./personDetailDto";

export interface ContactDetailDto{
    id : number
    email : string
    phoneNumber : string
    address : string
    personDetail : PersonDetailDto
}