import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreateBookedDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    id: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    checkIn: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    checkOut: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    guests: number

}