import { Company } from "src/company/entities/company.entity";


export class signinReturnDto{
  id: string; 
  name: string; 
  jwtToken: string; 
  email: string; 
  isAdmin: number;
  company: Company
}