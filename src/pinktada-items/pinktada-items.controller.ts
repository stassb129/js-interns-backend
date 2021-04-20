import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {PinktadaItemsService} from './pinktada-items.service';
import {CreatePinktadaItemDto} from './dto/create-pinktada-item.dto';
import {UpdatePinktadaItemDto} from './dto/update-pinktada-item.dto';
import {Item} from "./items/items.schema";

@Controller('pinktada-items')
export class PinktadaItemsController {
    constructor(private readonly pinktadaItemsService: PinktadaItemsService) {
    }

    @Post()
    create(@Body() item: Item) {
        return this.pinktadaItemsService.create(item);
    }

    @Get()
    findAll() {
        return this.pinktadaItemsService.findAll();
    }


}
