import { Test, TestingModule } from '@nestjs/testing';
import { OrderbookController } from './orderbook.controller';

describe('OrderbookController', () => {
  let controller: OrderbookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderbookController],
    }).compile();

    controller = module.get<OrderbookController>(OrderbookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
