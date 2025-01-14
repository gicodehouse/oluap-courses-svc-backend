import { ApiBodyOptions } from "@nestjs/swagger";
import EnrollmentDTO from "../dtos/enrollment/EnrollmentDTO";

class EnrollmentSwaggerExample {

    public static readonly API_ENROLLMENT_CREATE_DESCRIPTION: string = 'Criar registro de matrícula' ;
    public static readonly API_ENROLLMENT_CREATE: ApiBodyOptions = {
        description: 'Exemplo de criação de matrícula',
        type: EnrollmentDTO
    };

    public static readonly API_ENROLLMENT_GET_ALL_DESCRIPTION: string = 'Recuperar registros de matrícula' ;

    public static readonly API_ENROLLMENT_GET_ONE_DESCRIPTION: string = 'Recuperar um registro de matrícula pelo ID' ;

    public static readonly API_ENROLLMENT_GET_ALL_BY_USER_ID_DESCRIPTION: string = 'Recuperar registros de matrícula pelo ID do Usuário' ;

    public static readonly API_ENROLLMENT_UPDATE_ONE_DESCRIPTION: string = 'Atualizar registro de matrícula pelo ID e Corpo com os atributos a serem atualizados' ;
    public static readonly API_ENROLLMENT_UPDATE_ONE: ApiBodyOptions = {
        description: 'Exemplo de atualização de matrícula',
        type: EnrollmentDTO
    };

    public static readonly API_ENROLLMENT_DELETE_ONE_DESCRIPTION: string = 'Remover registro de matrícula pelo ID' ;
}

export default EnrollmentSwaggerExample;