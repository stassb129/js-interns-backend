import { PartialType } from '@nestjs/swagger';
import { CreatePinktadaItemDto } from './create-pinktada-item.dto';

export class UpdatePinktadaItemDto extends PartialType(CreatePinktadaItemDto) {}
