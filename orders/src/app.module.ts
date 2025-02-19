import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [OrderModule, RabbitmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
