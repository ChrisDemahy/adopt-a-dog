import {
  Adoption,
  AdoptionDetails,
  getAdoptee,
  getAdoption,
  getDog,
  newAdoption,
} from '@adopt-a-dog/entities';
import express, { Request } from 'express';
import { getConnection } from 'typeorm';

const router = express.Router();

// Rest Endpoints

// Get an Adoption by ID
router.get(
  '/:id',
  async (req: Request<{ id: number }, Adoption, null>, res) => {
    // Get the adoption from the database
    const adoption = await getAdoption(req.params.id);
    // Reply with the adoption
    res.json(adoption);
  }
);

//
// Create a new Adoption
//
export interface CreateAdoption {
  adopteeId: number;
  dogId: number;
}
router.post('/', async (req: Request<null, Adoption, CreateAdoption>, res) => {
  // Get the dog for the adoption
  const dog = await getDog(req.body.dogId);
  // Get the adoptee for the adoption
  const adoptee = await getAdoptee(req.body.adopteeId);

  // Create the adoption
  const adoption = await newAdoption(adoptee, dog, { adopted: true });
  // Reply with the new adoption
  res.json(adoption);
});
//
// Delete a Adoption by their ID
//
// router.delete('/:id', async (req: Request<{ id: number }, Dog>, res) => {
//   const deletedDog = await deleteadoption(req.params.id);

//   res.status(200);
// });

export default router;
