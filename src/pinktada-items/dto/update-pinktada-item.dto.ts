import { PartialType } from '@nestjs/swagger';
import { CoordsItemsDto } from './coords-items.dto';

export class UpdatePinktadaItemDto extends PartialType(CoordsItemsDto) {}
