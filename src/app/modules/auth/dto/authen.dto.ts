import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'example@gmail.com'
  })
  email: string;
  @ApiProperty({
    example: '1234567'
  })
  password: string;
}
