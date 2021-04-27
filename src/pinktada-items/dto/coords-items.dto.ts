import {ApiProperty} from "@nestjs/swagger";

export class CoordsItemsDto {

    @ApiProperty()
    leftBottomCoords: number[]

    @ApiProperty()
    rightTopCoords: number[]
}