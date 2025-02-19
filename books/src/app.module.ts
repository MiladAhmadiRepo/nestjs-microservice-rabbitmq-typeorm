import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {Book} from "./book/book.entity";
import {BookModule} from "./book/book.module";
import {RabbitMQModule} from "./rabbitmq/rabbitmq.module";

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
      database: 'book',
      entities: [Book],
      autoLoadEntities: true,
      synchronize: true,
    }),
    BookModule,
    RabbitMQModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}