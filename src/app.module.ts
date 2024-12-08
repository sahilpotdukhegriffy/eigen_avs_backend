import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OrderbookModule } from './orderbook/orderbook.module';
import { OrderBook } from './orderbook/orderbook.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Sahil@744',
      database: 'mydb',
      entities: [__dirname + '/**/*.entity{.ts,.js}', OrderBook],
      synchronize: true,
    }),
    UsersModule,
    OrderbookModule,
  ],
})
export class AppModule {}
