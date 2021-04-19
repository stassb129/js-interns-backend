import {ApiProperty} from "@nestjs/swagger";

export class CreatePinktadaItemDto {
    @ApiProperty()
    name: string;
}