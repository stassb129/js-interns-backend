import {ApiProperty} from "@nestjs/swagger";
import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsLatitude,
    IsLongitude,
} from "class-validator";

class coords {
    @IsLatitude()
    lat: number
    @IsLongitude()
    lng: number
}

export class CoordsItemsDto {
    @ApiProperty()
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    @IsArray()
    leftBottomCoords: coords[]

    @ApiProperty()
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    @IsArray()
    rightTopCoords: coords[]
}