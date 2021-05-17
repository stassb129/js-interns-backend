import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query} from '@nestjs/common';
import {PinktadaItemsService} from './pinktada-items.service';
import {CoordsItemsDto} from './dto/coords-items.dto';
import {UpdatePinktadaItemDto} from './dto/update-pinktada-item.dto';
import {Item} from "./items/items.schema";


@Controller('items')
export class PinktadaItemsController {
    constructor(private readonly pinktadaItemsService: PinktadaItemsService) {
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(@Query() query) {
        if (Object.keys(query).length) {
            return this.pinktadaItemsService.findPlacesByBoxCoords(query);
        }
        return this.pinktadaItemsService.findAll();
    }


    @HttpCode(HttpStatus.OK)
    @Post()
    findByBox(@Body() coords: CoordsItemsDto) {
        return this.pinktadaItemsService.findByBoxChords(coords);
    }


    @HttpCode(HttpStatus.OK)
    @Get('/:id')
    async findPlaceById(@Param() id) {
        return this.pinktadaItemsService.findOneById(id);
    }
}