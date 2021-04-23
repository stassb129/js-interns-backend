import {Injectable} from '@nestjs/common';
import {ChordsItemsDto} from './dto/chords-items.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Item, ItemDocument} from "./items/items.schema";
import {Model} from "mongoose";

@Injectable()
export class PinktadaItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {
    }


    async findAll(): Promise<Item[]> {
        return this.itemModel
            .find()
            .limit(10)
            .exec()
    }

    async findByBoxChords(chordsItemsDto: ChordsItemsDto): Promise<Item[]> {
        return this.itemModel
            .find({
                    location: {
                        $geoWithin: {
                            $box: [
                                chordsItemsDto.leftBottomChords, chordsItemsDto.rightTopChords
                            ]
                        }
                    }
                }, {location: 1, listing:{name:1}}
            )
            .limit(500)
            .exec();
    }
}