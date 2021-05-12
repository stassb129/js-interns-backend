import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query} from '@nestjs/common';
import {PinktadaItemsService} from './pinktada-items.service';
import {CoordsItemsDto} from './dto/coords-items.dto';
import {UpdatePinktadaItemDto} from './dto/update-pinktada-item.dto';
import {Item} from "./items/items.schema";

@Controller('pinktada-items')
export class PinktadaItemsController {
    constructor(private readonly pinktadaItemsService: PinktadaItemsService) {
    }

    @Get()
    findAll() {
        return this.pinktadaItemsService.findAll();
    }

    @HttpCode(HttpStatus.OK)
    @Get(':getPlaces')
    findPlacesByBoxChords(@Query() chords: CoordsItemsDto) {
        return this.pinktadaItemsService.findPlacesByBoxChords(chords);
    }

    @HttpCode(HttpStatus.OK)
    @Post()
    findByBox(@Body() coords: CoordsItemsDto) {
        return this.pinktadaItemsService.findByBoxChords(coords);
    }


}
