//
// Helper functions for dealing with the Dog Repository created with TypeORM
//
// Helper to reuse the existing database connection
import { getConnection } from 'typeorm';
// Dog Entity
import { Dog } from '../dog.entity';
// Adoption Entity
import { Adoption } from '../adoption.entity';
// Adoptee Entity
import { Adoptee } from '../adoptee.entity';

//
// New Adoption
//
// All the information required to create an Adoptee
export interface AdoptionDetails {
  adopted: boolean;
}

// Helper function for when an Adoptee 'adopts' a Dog
export const newAdoption = async (
  adoptee: Adoptee,
  dog: Dog,
  details: AdoptionDetails
) => {
  // Reuse the existing database connection
  const connection = getConnection();

  // Create the entity
  const adoption = new Adoption();
  adoption.adoptee = adoptee;
  adoption.dog = dog;
  adoption.adopted = details.adopted;

  // Get the repoistory to save the Adoption
  const adoptionRepository = connection.getRepository(Adoption);

  // Save the new entity to the database then return it
  await adoptionRepository.save(adoption);
  return adoption;
};
//
// Get an Adoption
//
// TODO change to dataloader-ish (get any number of keys including 1)
// Helper to get an adoption from the database by their id
export const getAdoption = async (id: number) => {
  // Reuse the existing database connection
  const connection = getConnection();

  // Get the repository to find the adoption
  const adoptionRepository = connection.getRepository(Adoption);

  // Find and return the Adoption
  const adoption = await adoptionRepository.findOne(id);
  return adoption;
};
