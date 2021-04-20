import {ApiProperty} from "@nestjs/swagger";

export class CreateUsersDto {
    @ApiProperty()
    id?: string

    @ApiProperty()
    username: string

    @ApiProperty()
    password: string
}