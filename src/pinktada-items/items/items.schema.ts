import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import Listing = Pinktada.Listing;
import PricingQuote = Pinktada.PricingQuote;
import Verified = Pinktada.Verified;
import Location = Pinktada.Location;

export type ItemsDocument = Item & Document;

@Schema()
export class Item {
    @Prop()
    listing: Listing

    @Prop()
    listingParamOverrides: any

    @Prop()
    luxuryInfo: any

    @Prop()
    pricingQuote: PricingQuote

    @Prop()
    verified: Verified

    @Prop()
    verifiedCard: boolean

    @Prop()
    location: Location
}

export const ItemSchema = SchemaFactory.createForClass(Item);