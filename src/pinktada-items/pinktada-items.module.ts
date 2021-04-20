import {Module} from '@nestjs/common';
import {PinktadaItemsService} from './pinktada-items.service';
import {PinktadaItemsController} from './pinktada-items.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Item, ItemSchema} from "./items/items.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Item.name, schema: ItemSchema}])
    ],
    controllers: [PinktadaItemsController],
    providers: [PinktadaItemsService]
})
export class PinktadaItemsModule {

}