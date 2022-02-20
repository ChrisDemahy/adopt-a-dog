import express from 'express';

import adoptionRouter from './adoptionRouter';
import adopteeRouter from './adopteeRouter';
import dogRouter from './dogRouter';

const router = express.Router();

// Adoptee endpoint
router.use('/adoptee', adopteeRouter);
// Adoption Endpoint
router.use('/adoption', adoptionRouter);
// Dog Endpoint
router.use('/dog', dogRouter);

export default router;
