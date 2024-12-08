import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { OrderBookService } from './orderbook.service';
import { OrderBook } from './orderbook.entity';

@Controller('orderbook')
export class OrderBookController {
  constructor(private readonly orderBookService: OrderBookService) {}

  @Post()
  async createOrder(@Body() order: Partial<OrderBook>): Promise<OrderBook> {
    return this.orderBookService.createOrder(order);
  }

  @Get(':orderid')
  async getOrder(@Param('orderid') orderid: string): Promise<OrderBook> {
    return this.orderBookService.findOneOrder(Number(orderid));
  }

  @Get()
  async getOrders(): Promise<OrderBook[]> {
    return this.orderBookService.findAllOrders();
  }
}
