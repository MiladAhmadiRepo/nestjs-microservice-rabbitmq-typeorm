import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [CustomerModule, RabbitmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
