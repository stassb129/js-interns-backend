import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './database/database.module';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {MongooseModule} from "@nestjs/mongoose";
import {PinktadaItemsModule} from './pinktada-items/pinktada-items.module';
import {ConfigModule} from "@nestjs/config";
import {PaymentModule} from './payment/payment.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `./env/${process.env.NODE_ENV}.env`
        }),
        DatabaseModule,
        AuthModule,
        UsersModule,
        PinktadaItemsModule,
        MongooseModule.forRoot('mongodb://mongo:27017/pinktada'),
        PaymentModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}