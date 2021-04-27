import {Injectable} from '@nestjs/common';
import {CoordsItemsDto} from './dto/coords-items.dto';
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

    async findByBoxChords(coordsItemsDto: CoordsItemsDto): Promise<Item[]> {
        return this.itemModel
            .find({
                    location: {
                        $geoWithin: {
                            $box: [
                                coordsItemsDto.leftBottomCoords, coordsItemsDto.rightTopCoords
                            ]
                        }
                    }
                }, {location: 1, listing:{name:1}}
            )
            .limit(500)
            .exec();
    }
}