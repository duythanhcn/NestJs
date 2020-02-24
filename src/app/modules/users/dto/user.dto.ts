import { Min, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInputDto {
  @IsEmail()
  @ApiProperty({
    example: 'example@gmail.com'
  })
  email: string;
  @ApiProperty({
    example: 'Justin Le'
  })
  fullname: string;
  @ApiProperty({
    example: '1234567Pwd'
  })
  password: string;
  @ApiProperty()
  gender: string;
}
