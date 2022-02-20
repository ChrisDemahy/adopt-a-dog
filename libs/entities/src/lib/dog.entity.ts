import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Adoption } from './adoption.entity';

// A dog that can be adopted
@Entity()
export class Dog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Whether or not the dog has been adopted by an adoptee
  @Column({ default: false })
  adopted: boolean;

  // Date the dog was put up for adoption
  @CreateDateColumn()
  datePutUpForAdoption: string;

  //
  @OneToMany(() => Adoption, (Adoption) => Adoption.dog, { nullable: true })
  public Adoption!: Adoption[];
}

export default Dog;
