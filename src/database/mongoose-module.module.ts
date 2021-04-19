import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {DatabaseModule} from "./database.module";
import {AuthModule} from "../auth/auth.module";
import {UsersModule} from "../users/users.module";
import {databaseProviders} from "./database.providers";

@Module({})
export class MongooseModuleModule {

}
