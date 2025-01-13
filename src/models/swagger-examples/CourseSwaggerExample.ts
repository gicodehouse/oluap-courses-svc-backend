import { ApiBodyOptions } from "@nestjs/swagger";
import CourseDTO from "../dtos/course/CourseDTO";

class CourseSwaggerExample {

    public static readonly API_COURSE_CREATE_DESCRIPTION: string = 'Criar registro de curso' ;
    public static readonly API_COURSE_CREATE: ApiBodyOptions = {
        description: 'Exemplo de criação de curso',
        type: CourseDTO
    };

    public static readonly API_COURSE_GET_ALL_DESCRIPTION: string = 'Recuperar registros de curso' ;

    public static readonly API_COURSE_GET_ONE_DESCRIPTION: string = 'Recuperar um registro de curso pelo ID' ;

    public static readonly API_COURSE_UPDATE_ONE_DESCRIPTION: string = 'Atualizar registro de curso pelo ID e Corpo com os atributos a serem atualizados' ;
    public static readonly API_COURSE_UPDATE_ONE: ApiBodyOptions = {
        description: 'Exemplo de atualização de curso',
        type: CourseDTO
    };

    public static readonly API_COURSE_DELETE_ONE_DESCRIPTION: string = 'Remover registro de curso pelo ID' ;
}

export default CourseSwaggerExample;