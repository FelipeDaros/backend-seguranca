import { Company } from "src/company/entities/company.entity";
import { Post } from "src/post/entities/post.entity";


export class signinReturnDto{
  id: string; 
  name: string; 
  jwtToken: string; 
  email: string; 
  isAdmin: number;
  company: Company
  post: Post;
}