import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import Listing = Pinktada.Listing;
import PricingQuote = Pinktada.PricingQuote;
import Verified = Pinktada.Verified;
import Location = Pinktada.Location;

export type ItemDocument = Item & Document;

@Schema()
export class Item {

    @Prop({
        type:{}
    })
  listing: Listing;

    @Prop({
        type:{}
    })
    listingParamOverrides: any

    @Prop({
        type:{}
    })
    luxuryInfo: any

    @Prop({
        type:{}
    })
    pricingQuote: PricingQuote

    @Prop({
        type:{}
    })
    verified: Verified

    @Prop({
        type:{}
    })
    verifiedCard: boolean

    @Prop({
        type:{}
    })
    location: Location
}

export const ItemSchema = SchemaFactory.createForClass(Item)