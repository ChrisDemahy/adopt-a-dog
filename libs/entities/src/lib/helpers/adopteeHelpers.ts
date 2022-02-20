// Adoptee Helpers
//
// Helper functions for dealing with the Adoptee Repository created with TypeORM
//
// Helper to reuse the existing database connection
import { getConnection } from 'typeorm';
// Adoptee Entity
import { Adoptee } from '../adoptee.entity';

//
// New Adoptee
//
// All the information required to create an Adoptee
export interface AdopteeDetails {
  firstName: string;
  lastName: string;
}
// Helper to create a new adoptee in the database
export const newAdoptee = async ({ firstName, lastName }: AdopteeDetails) => {
  // Reuse the existing database connection
  const connection = getConnection();

  // Create the entity
  const adoptee = new Adoptee();
  adoptee.firstName = firstName;
  adoptee.lastName = lastName;

  // Get the repository to save the adoptee
  const adopteeRepository = connection.getRepository(Adoptee);

  // Save the new entity to the database then return it
  await adopteeRepository.save(adoptee);
  return adoptee;
};

//
// Get an Adoptee
//
// Helper to get a Adoptee from the database by their id
// TODO change to dataloader-ish (get any number of keys including 1)
export const getAdoptee = async (id: number) => {
  // Reuse the existing database connection
  const connection = getConnection();
  // Get the repository to find the adoptee
  const adopteeRepository = connection.getRepository(Adoptee);

  // Find and return the Adoptee
  const adoptee = await adopteeRepository.findOne(id);
  return adoptee;
};
