import {Injectable} from '@nestjs/common';
import {CoordsItemsDto} from './dto/coords-items.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Item, ItemDocument} from "./items/items.schema";
import {Model, Schema, Types} from "mongoose";
import {setSortOptions, isEmpty} from './functions/sort';


@Injectable()
export class PinktadaItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {
    }

    async totalCount() {
        return await this.itemModel.countDocuments().exec()
    }

    async findAll(): Promise<Item[]> {
        return this.itemModel
            .find({}, {})
            .limit(20)
            .exec()
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

    async findOneById(query): Promise<Item> {
        return this.itemModel
            .findOne({
                _id: query.id
            })
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

    async findPlacesByBoxCoords(query) {
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
                    }, pricingQuote: {priceString: 1, rate: {amount: 1}}
                }
            )

        //Sort
        const sortConf = setSortOptions(query.sort)

        if (!isEmpty(sortConf)) {
            res.sort(sortConf)
        }

        //Pagination
        const page: number = parseInt(query.page as any) || 1
        const limit = 10
        const total = await this.totalCount()
        const data = await res.skip((page - 1) * limit).limit(limit).lean().exec()

        return {
            data,
            total,
            page,
            last_page: Math.ceil(total / limit)
        }
    }
}