import { Adoptee } from './lib/adoptee.entity';
import { Adoption } from './lib/adoption.entity';
import { Dog } from './lib/dog.entity';

const entities = [Adoptee, Dog, Adoption];

export default entities;

export * from './lib/adoptee.entity';
export * from './lib/adoption.entity';
export * from './lib/dog.entity';

export * from './lib/helpers';
