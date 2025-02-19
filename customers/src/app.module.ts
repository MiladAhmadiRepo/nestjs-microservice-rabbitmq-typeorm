import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {RabbitMQModule} from "./rabbitmq/rabbitmq.module";
import {Customer} from "./customer/customer.entity";
import {CustomerModule} from "./customer/customer.module";

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
      database: 'customer',
      entities: [Customer],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CustomerModule,
    RabbitMQModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}