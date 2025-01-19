import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'Product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  productId: string;

  @Column()
  faName: string;

  @Column()
  enName: string;

  @Column({ unique: true })
  slug: string;

  @Column('text')
  description: string;

  @Column('decimal')
  price: number;

  @Column({ default: false })
  published: boolean;

  @Column()
  thumbnail: string;

  @Column('simple-array') // For storing an array of image URLs
  images: string[];

  @Column('int')
  remaining: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.productsCreated)
  createdBy: UserEntity;

  @Column({ nullable: true })
  updatedBy: string;
}
