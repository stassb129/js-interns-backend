import {Injectable} from '@nestjs/common';
import {CoordsItemsDto} from './dto/coords-items.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Item, ItemDocument} from "./items/items.schema";
import {Model} from "mongoose";

@Injectable()
export class PinktadaItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {
    }

    async findByIds(ids: String[]): Promise<Item[]> {
        return this.itemModel
            .find({
                _id: {$in: ids}
            }, {
                listing: {
                    name: 1,
                    avgRating: 1,
                    kickerContent: {messages: 1},
                    pictureUrl: 1,
                    reviews: 1,
                    reviewsCount: 1,
                    pricingQuote: {priceString: 1}
                }
            })
            .limit(20)
            .exec()
    }

    async findOneById(): Promise<Item[]> {
        return this.itemModel
            .find()
            .limit(1)
            .exec()
    }

    async findByBoxChords(coordsItemsDto: CoordsItemsDto): Promise<Item[]> {
        return this.itemModel
            .find({
                    location: {
                        $geoWithin: {
                            $box: [
                                coordsItemsDto.leftBottomCoords,
                                coordsItemsDto.rightTopCoords
                            ]
                        }
                    }
                }, {location: 1, listing: {name: 1}}
            )
            .lean()
            .limit(500)
            .exec();
    }

    async findPlacesByBoxChords(query): Promise<Item[]> {

        const res = this.itemModel
            .find({
                    location: {
                        $geoWithin: {
                            $box: [
                                query.leftBottomCoords.map(e => Number(e)),
                                query.rightTopCoords.map(e => Number(e))
                            ]
                        }
                    }
                }, {
                    listing: {
                        _id: 1,
                        name: 1,
                        avgRating: 1,
                        kickerContent: {messages: 1},
                        pictureUrl: 1,
                        reviews: 1,
                        reviewsCount: 1,
                    }, pricingQuote: {priceString: 1}
                }
            )

        if (query.sort.upPrice) {
            res.sort({
                pricingQuote: {priceString: 1}
            })
        }
        if (query.sort.downPrice) {
            res.sort({
                pricingQuote: {priceString: -1}
            })
        }
        if (query.sort.rate) {
            res.sort({
                avgRating: 1
            })
        }
        // if (query.sort.isAvailable) {
        //     res.sort({
        //         pricingQuote: {priceString: 1}
        //     })
        // }

        return res.lean()
            .limit(500)
            .exec();
    }
}

