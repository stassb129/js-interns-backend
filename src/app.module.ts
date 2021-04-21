import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './database/database.module';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {MongooseModule} from "@nestjs/mongoose";
import {PinktadaItemsModule} from './pinktada-items/pinktada-items.module';


@Module({
    imports: [
        DatabaseModule,
        AuthModule,
        UsersModule,
        PinktadaItemsModule,
        MongooseModule.forRoot('mongodb://localhost:27017/pinktada'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}