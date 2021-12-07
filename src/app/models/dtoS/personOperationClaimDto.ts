import { OperationClaim } from "../entities/operationClaim";

export interface PersonOperationClaimDto{
    personId : number
    operationClaims : OperationClaim[]
}