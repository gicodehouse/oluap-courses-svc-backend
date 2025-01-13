import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

class UserDTO {
    
    @IsString()
    @ApiProperty({
        description: 'Nome do Usuário',
        example: 'Paulo Ricardo Aguiar Bernardo',
        type: String,
    })
    name: string;

    @IsEmail()
    @ApiProperty({
        description: 'Email do Usuário',
        example: 'pauloaguiar.developer@gmail.com',
        type: String,
    })
    email: string;

    @IsString()
    @ApiProperty({
        description: 'Senha do Usuário',
        example: '123456',
        type: String,
    })
    password: string;
}

export default UserDTO;