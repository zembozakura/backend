export class InvalidArgumentException extends Error {
    
    constructor() {
        super("Argumentos invalidos");
        
        this.StatusCode = 400;
        
    }
}