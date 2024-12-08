import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderBook } from './orderbook.entity';

@Injectable()
export class OrderBookService {
  constructor(
    @InjectRepository(OrderBook)
    private readonly orderBookRepository: Repository<OrderBook>,
  ) {}

  // Create a new order
  async createOrder(order: Partial<OrderBook>): Promise<OrderBook> {
    return this.orderBookRepository.save(order);
  }

  // Get all orders
  async findAllOrders(): Promise<OrderBook[]> {
    return this.orderBookRepository.find();
  }

  // Get one order by orderid
  async findOneOrder(orderid: number): Promise<OrderBook> {
    return this.orderBookRepository.findOne({
      where: { orderid },
    });
  }
}
