import { Module } from '@nestjs/common';
import { OrderbookService } from './orderbook.service';
import { OrderbookController } from './orderbook.controller';

@Module({
  providers: [OrderbookService],
  controllers: [OrderbookController]
})
export class OrderbookModule {}
