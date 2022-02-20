//
// Helper functions for dealing with the Dog Repository created with TypeORM
//
// Helper to reuse the existing database connection
import { getConnection } from 'typeorm';
// Dog Entity
import { Dog } from '../dog.entity';
//
// New Dog
//
// All the information required to create a dog
interface DogDetails {
  name: string;
}
// Dog helper to create a new dog in the database
export const newDog = async ({ name }: DogDetails) => {
  // Reuse the existing database connection
  const connection = getConnection();

  // Get the repository to save the dog
  const dogRepository = connection.getRepository(Dog);

  // Create the entity
  const dog = new Dog();
  dog.name = name;

  // Save the new entity to the database then return it
  await dogRepository.save(dog);
  return dog;
};
//
// Get a Dog
//
// TODO change to dataloader-ish (get any number of keys including 1)
// Helper to get a dog from the database by their id
export const getDog = async (id: number) => {
  // Reuse the existing database connection
  const connection = getConnection();

  // Get the repository to find the dog
  const dogRepository = connection.getRepository(Dog);

  // Find and return the dog from the database
  const dog = await dogRepository.findOne(id);
  return dog;
};
//
// Delete a Dog
//
// NOTE: No dogs were hurt in the coding of this project 🐕
// Helper function to delete a dog from the database
export const deleteDog = async (id: number) => {
  // Reuse the existing database connection
  const connection = getConnection();

  // Get the repository to delete the dog
  const dogRepository = connection.getRepository(Dog);

  // Find and delete the dog from the database
  const dog = await dogRepository.delete(id);
  // return the deleted dog
  return dog;
};
