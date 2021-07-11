import { ValidationError } from 'express-validator';

import { CustomError } from './customError';

export class RequestValidationError extends CustomError {
    StatusCode = 400;

    constructor(public errors: ValidationError[]) {
        super('Invalid reqest data');
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    formatErrors() {
        return this.errors.map((error) => {
            return { message: error.msg, field: error.param };
        });
    }
}
