import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../../src/errors/customError';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.StatusCode).send({ errors: err.formatErrors() });
    }

    res.status(400).send({ errors: [{ message: 'Error is in the app' }] });
};
