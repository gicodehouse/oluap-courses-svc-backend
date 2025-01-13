import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

class LoginDTO {
    @IsEmail()
    @ApiProperty({
        description: 'Email do usuário',
        example: 'teste2@email.com',
        type: String,
      })
    email: string;
    
    @IsString()
    @ApiProperty({
        description: 'Senha do usuário',
        example: '1234senha',
        type: String,
      })    
    password: string;
}

export default LoginDTO;