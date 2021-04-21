import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {PinktadaItemsService} from './pinktada-items.service';
import {ChordsItemsDto} from './dto/chords-items.dto';
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

    @Post()
    findByBox(@Body() chords: ChordsItemsDto) {
        return this.pinktadaItemsService.findByBoxChords(chords);
    }



}
