import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'BOOK_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [
                        'http://localhost:15672',
                    ],
                    queue: 'book_queue',
                    queueOptions: { durable: false },
                },
            },
            {
                name: 'CUSTOMER_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [
                        'http://localhost:15672',
                    ],
                    queue: 'customer_queue',
                    queueOptions: { durable: false },
                },
            },
            {
                name: 'ORDER_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [
                        'http://localhost:15672',
                    ],
                    queue: 'order_queue',
                    queueOptions: { durable: false },
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class RabbitMQModule {}