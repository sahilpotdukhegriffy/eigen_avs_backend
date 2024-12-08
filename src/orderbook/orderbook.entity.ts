import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orderbook')
export class OrderBook {
  @PrimaryGeneratedColumn()
  orderid: number;

  @Column({ type: 'varchar', length: 255 })
  token: string;

  @Column({ type: 'decimal', precision: 10, scale: 10 })
  amount: number;

  @Column({ type: 'varchar', length: 255 })
  price: string;
}
