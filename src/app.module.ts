import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OrderbookModule } from './orderbook/orderbook.module';
import { OrderBook } from './orderbook/orderbook.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.100.133.166',
      port: 3306,
      username: 'root',
      password: `V'DxEx7V+|H0lK#T`,
      database: 'griffy',
      entities: [__dirname + '/**/*.entity{.ts,.js}', OrderBook],
      synchronize: true,
    }),
    UsersModule,
    OrderbookModule,
  ],
})
export class AppModule {}
