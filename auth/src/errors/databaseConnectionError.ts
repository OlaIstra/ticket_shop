import { CustomError } from './customError';

export class DatabaseConnectionError extends CustomError {
    StatusCode = 500;

    constructor() {
        super('Error to connect to database');
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    formatErrors() {
        return [{ message: this.message }];
    }
}
