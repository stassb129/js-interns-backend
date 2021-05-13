import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query} from '@nestjs/common';
import {PinktadaItemsService} from './pinktada-items.service';
import {CoordsItemsDto} from './dto/coords-items.dto';
import {UpdatePinktadaItemDto} from './dto/update-pinktada-item.dto';
import {Item} from "./items/items.schema";


@Controller('pinktada-items')
export class PinktadaItemsController {
    constructor(private readonly pinktadaItemsService: PinktadaItemsService) {
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll() {
        return this.pinktadaItemsService.findAll();
    }


    @HttpCode(HttpStatus.OK)
    @Post()
    findByBox(@Body() coords: CoordsItemsDto) {
        return this.pinktadaItemsService.findByBoxChords(coords);
    }

    @HttpCode(HttpStatus.OK)
    @Get(':getPlaces')
    async findPlacesByBoxChords(@Query() query) {
        return this.pinktadaItemsService.findPlacesByBoxChords(query);
    }

}