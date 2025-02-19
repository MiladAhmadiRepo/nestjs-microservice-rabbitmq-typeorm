import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {RabbitMQModule} from "./rabbitmq/rabbitmq.module";
import {OrderModule} from "./order/order.module";
import {Order} from "./order/order.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5321,
      username: 'postgres',
      password: 'milad6145',
      database: 'order',
      entities: [Order],
      autoLoadEntities: true,
      synchronize: true,
    }),
    OrderModule,
    RabbitMQModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}