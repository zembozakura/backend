

import { InvalidArgumentException } from "../exception/invalid_argument_exeception.js";
import { InvalidCredenctialsException } from "../exception/invalid_credentials_exception.js";


export class LoginService {
      static async login(credentials) {
        if(!credentials
            ||!credentials.username
            ||!credentials.password
            || typeof credentials.username != 'string'
            || typeof credentials.password != 'string'
        )
            throw new InvalidArgumentException();
            

        
        if (credentials.username !== 'admin'){
            throw new InvalidCredenctialsException();
        
        } 
        if (credentials.password !== '1234'){
            throw new InvalidCredenctialsException();
        }
        return{
            token: 'token de acceso',
         }
        }
     
};

  