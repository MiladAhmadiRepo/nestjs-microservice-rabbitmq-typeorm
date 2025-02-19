import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [BookModule, RabbitmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
