import { CustomError } from './customError';

export class NotFoundError extends CustomError {
    StatusCode = 404;

    constructor() {
        super('Page not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    formatErrors() {
        return [{ message: 'Page not found' }];
    }
}
