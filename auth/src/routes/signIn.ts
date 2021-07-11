import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post(
    '/api/users/signIn',
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
            return res.status(400).send(errors.array());
        }

        const { email, password } = req.body;
        res.send('signIn');
    },
);

export { router as signInRouter };
