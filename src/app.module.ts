import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModuleModule } from './database/mongoose-module.module';
import {MongooseModule} from "@nestjs/mongoose";
import { PinktadaItemsModule } from './pinktada-items/pinktada-items.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, MongooseModuleModule,  MongooseModule.forRoot('mongodb://localhost/nest'), PinktadaItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
