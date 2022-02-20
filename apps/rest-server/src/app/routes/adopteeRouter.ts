import express, { Request } from 'express';
import { getConnection } from 'typeorm';

// Import entity and helpers from shared nx library
import {
  AdopteeDetails,
  getAdoptee,
  newAdoptee,
  Adoptee,
} from '@adopt-a-dog/entities';

// Create the express router for /adoptee
const router = express.Router();

// Rest Endpoints

//
// Get an Adoptee by ID
//
router.get('/:id', async (req: Request<{ id: number }, Adoptee, null>, res) => {
  const id = +req.params.id;
  const adoptee = await getAdoptee(id);
  // Reply with the Adoptee
  res.json(adoptee);
});

//
// Create a new Dog
//
router.post('/', async (req: Request<null, unknown, AdopteeDetails>, res) => {
  // Create the dog
  const dog = await newAdoptee(req.body);
  // Reply with the new Dog
  res.json(dog);
});

export default router;
