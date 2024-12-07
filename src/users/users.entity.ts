import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  public_address: string;

  @Column()
  private_address: string;

  @Column()
  ethereum_address: string;
}
