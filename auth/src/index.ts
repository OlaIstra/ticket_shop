import express from 'express';
import { json } from 'body-parser';

import { signInRouter } from './routes/signIn';
import { signOutRouter } from './routes/signOut';
import { signUpRouter } from './routes/signUp';
import { currentUserRouter } from './routes/currentUser';

const app = express();
app.use(json());

app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.use(currentUserRouter);

app.listen(3000, () => {
    console.log('Auth is on 3000');
});
