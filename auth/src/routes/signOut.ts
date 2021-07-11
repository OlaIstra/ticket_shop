import express from 'express';

const router = express.Router();

router.post('/api/users/signOut', async (_, res: express.Response) => {
    res.send('signOut');
});

export { router as signOutRouter };
