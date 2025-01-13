import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

class CourseDTO {

    @IsString()
    @ApiProperty({
        description: 'Título do Curso',
        example: 'Programação Orientada a Objetos com Typescript',
        type: String,
    })
    title: string;

    @IsString()
    @ApiProperty({
        description: 'Descrição do Curso',
        example: 'Programação Orientada a Objetos com Typescript',
        type: String,
    })
    description: string;

    @IsNumber()
    @ApiProperty({
        description: 'Quantidade de horas do Curso',
        example: 18,
        type: Number,
    })
    hours: number;

}

export default CourseDTO;