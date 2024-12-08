import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderBook } from './orderbook.entity';
import { OrderBookService } from './orderbook.service';
import { OrderBookController } from './orderbook.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderBook])], // Register the entity with TypeOrmModule
  providers: [OrderBookService],
  controllers: [OrderBookController],
})
export class OrderbookModule {}
