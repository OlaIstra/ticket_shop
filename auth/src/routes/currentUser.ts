import express from 'express';

const router = express.Router();

router.get('/api/users/currentUser', async (_, res) => {
    res.send('currentUser');
});

export { router as currentUserRouter };
