import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { RequestValidationError } from '../errors/requestValidationError';
import { DatabaseConnectionError } from '../errors/databaseConnectionError';

const router = express.Router();

router.post(
    '/api/users/signUp',
    [
        body('email').isEmail().withMessage('Email is not valid!'),
        body('password')
            .trim()
            .isLength({ min: 6 })
            .withMessage('Password should be longer than 6 symbols'),
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const { email, password } = req.body;

        console.log('Start to create a user');
        throw new DatabaseConnectionError();

        res.send('signUp successfully');
    },
);

export { router as signUpRouter };
