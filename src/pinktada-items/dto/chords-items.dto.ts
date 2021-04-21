import {ApiProperty} from "@nestjs/swagger";

export class ChordsItemsDto {

    @ApiProperty()
    leftBottomChords: number[]

    @ApiProperty()
    rightTopChords: number[]
}