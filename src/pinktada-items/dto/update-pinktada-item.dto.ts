import { PartialType } from '@nestjs/swagger';
import { ChordsItemsDto } from './chords-items.dto';

export class UpdatePinktadaItemDto extends PartialType(ChordsItemsDto) {}
