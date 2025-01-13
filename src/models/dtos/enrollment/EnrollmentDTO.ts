import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

class EnrollmentDTO {

    @IsNumber()
    @ApiProperty({
        description: 'ID do Usuário',
        example: 18,
        type: Number,
    })
    user_id: number;

    @IsNumber()
    @ApiProperty({
        description: 'ID do Curso',
        example: 7,
        type: Number,
    })
    course_id: number;

}

export default EnrollmentDTO;