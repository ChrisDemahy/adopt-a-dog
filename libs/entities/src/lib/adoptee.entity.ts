import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';
import { Adoption } from '..';

// Essentially a user that wishes to adopt a dog
// TODO Rename Adoptee to User. Right now if they have not adopted a dog they are still an Adoptee...
@Entity()
export class Adoptee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // First name of the adoptee
  @Column({ nullable: false })
  firstName: string;

  // Last name of the adoptee
  @Column({ nullable: false })
  lastName: string;

  // Date the Adoptee signed up
  @CreateDateColumn()
  dateRegistered: string;

  // Relation for if the Adoptee has adopted a dog.
  @OneToMany(() => Adoption, (Adoption) => Adoption.adoptee, { nullable: true })
  public Adoption!: Adoption[];
}

export default Adoptee;
