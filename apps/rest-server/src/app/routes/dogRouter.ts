import { deleteDog, Dog, getDog, newDog } from '@adopt-a-dog/entities';
import express, { Request } from 'express';
import { getConnection } from 'typeorm';

// router for /dog
const router = express.Router();

// Rest Endpoints
//
// Get a Dog by their id
//
router.get('/:id', async (req: Request<{ id: number }, Dog, null>, res) => {
  // Get the dog from the database
  const dog = await getDog(req.params.id);
  // send the dog
  res.json(dog);
});
//
// Create a new Dog
//
router.post('/', async (req: Request<null, Dog, { name: string }>, res) => {
  // Create the dog
  const dog = await newDog({ name: req.body.name });
  // Reply with the new Dog
  res.json(dog);
});
//
// Delete a dog by their ID
//
router.delete('/:id', async (req: Request<{ id: number }, Dog>, res) => {
  const deletedDog = await deleteDog(req.params.id);

  res.status(200);
});

export default router;
