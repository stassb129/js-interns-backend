import {Injectable} from '@nestjs/common';
import {CreatePinktadaItemDto} from './dto/create-pinktada-item.dto';
import {UpdatePinktadaItemDto} from './dto/update-pinktada-item.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Item, ItemDocument} from "./items/items.schema";
import {Model} from "mongoose";

@Injectable()
export class PinktadaItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {
    }

    async create(item: Item): Promise<Item> {
        const createdItem = new this.itemModel(item)
        return createdItem
    }

    async findAll(): Promise<Item[]> {
        return this.itemModel
            .find()
            .limit(10)
            .exec()
    }
}