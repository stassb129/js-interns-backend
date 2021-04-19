import { Injectable } from '@nestjs/common';
import { CreatePinktadaItemDto } from './dto/create-pinktada-item.dto';
import { UpdatePinktadaItemDto } from './dto/update-pinktada-item.dto';

@Injectable()
export class PinktadaItemsService {
  create(createPinktadaItemDto: CreatePinktadaItemDto) {
    return 'This action adds a new pinktadaItem';
  }

  findAll() {
    return `This action returns all pinktadaItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pinktadaItem`;
  }

  update(id: number, updatePinktadaItemDto: UpdatePinktadaItemDto) {
    return `This action updates a #${id} pinktadaItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} pinktadaItem`;
  }
}
