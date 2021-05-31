import {Connection, Repository} from 'typeorm';
import {Booked} from './booked.entity';

export const bookedProviders = [
    {
        provide: 'BOOK_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Booked),
        inject: ['DATABASE_CONNECTION'],
    },
];
