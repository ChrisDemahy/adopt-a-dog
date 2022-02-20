import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

import { Adoptee } from './adoptee.entity';
import { Dog } from './dog.entity';

// An adoption between a dog and an Adoptee
@Entity()
export class Adoption extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Date the adoption occured
  @CreateDateColumn()
  adoptionDate: string;

  // Whether or not the dog has been adopted by an adoptee
  @Column()
  adopted: boolean;

  // Two many to one relationships creates a Many to Many relation between Dog and Adoptee
  @ManyToOne(() => Adoptee, (adoptee) => adoptee.Adoption, { nullable: true })
  public adoptee!: Adoptee;

  @ManyToOne(() => Dog, (dog) => dog.Adoption, { nullable: true })
  public dog!: Dog;
}

export default Adoption;
