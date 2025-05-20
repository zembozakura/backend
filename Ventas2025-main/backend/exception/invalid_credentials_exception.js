export class InvalidCredenctialsException extends Error {
    
    constructor() {
        
        super("Argumentos invalidos");
        this.StatusCode = 400;
        
    }
}