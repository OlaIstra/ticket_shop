import { CustomError } from './customError';

export class BadRequestError extends CustomError {
    StatusCode = 400;

    constructor(public error: string) {
        super(error);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    formatErrors() {
        return [{ message: this.error }];
    }
}
