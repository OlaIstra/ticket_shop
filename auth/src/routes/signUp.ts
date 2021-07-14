import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { BadRequestError } from './../errors/badRequestError';
import { User } from '../../src/models/user';
import { RequestValidationError } from '../errors/requestValidationError';

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

        const existUser = await User.findOne({ email });

        if (existUser) throw new BadRequestError('This Email is already in use');

        const user = User.build({ email, password });
        await user.save();

        res.status(201).send(user);
    },
);

export { router as signUpRouter };
