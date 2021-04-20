import {ApiProperty} from "@nestjs/swagger";

export class LoginAuthDto {

    @ApiProperty()
    id?: string

    @ApiProperty()
    username: string

    @ApiProperty()
    password: string
}