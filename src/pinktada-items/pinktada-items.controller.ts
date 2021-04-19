import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PinktadaItemsService } from './pinktada-items.service';
import { CreatePinktadaItemDto } from './dto/create-pinktada-item.dto';
import { UpdatePinktadaItemDto } from './dto/update-pinktada-item.dto';

@Controller('pinktada-items')
export class PinktadaItemsController {
  constructor(private readonly pinktadaItemsService: PinktadaItemsService) {}

  @Post()
  create(@Body() createPinktadaItemDto: CreatePinktadaItemDto) {
    return this.pinktadaItemsService.create(createPinktadaItemDto);
  }

  @Get()
  findAll() {
    return this.pinktadaItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinktadaItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePinktadaItemDto: UpdatePinktadaItemDto) {
    return this.pinktadaItemsService.update(+id, updatePinktadaItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinktadaItemsService.remove(+id);
  }
}
