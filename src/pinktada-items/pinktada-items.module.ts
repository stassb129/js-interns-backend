import { Module } from '@nestjs/common';
import { PinktadaItemsService } from './pinktada-items.service';
import { PinktadaItemsController } from './pinktada-items.controller';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  // imports: [],
  controllers: [PinktadaItemsController],
  providers: [PinktadaItemsService]
})
export class PinktadaItemsModule {

}