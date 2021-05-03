import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsPassportNumber, IsString} from "class-validator";


export class CreateUsersDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    id?: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    username: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string
}