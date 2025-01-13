import { ApiBodyOptions } from "@nestjs/swagger";
import UserDTO from "../dtos/user/UserDTO";

class UserSwaggerExample {

    public static readonly API_USER_CREATE_DESCRIPTION: string = 'Criar registro de usuário' ;
    public static readonly API_USER_CREATE: ApiBodyOptions = {
        description: 'Exemplo de criação de usuário',
        type: UserDTO
    };

    public static readonly API_USER_GET_ALL_DESCRIPTION: string = 'Recuperar registros de usuário' ;

    public static readonly API_USER_GET_ONE_DESCRIPTION: string = 'Recuperar um registro de usuário pelo ID' ;

    public static readonly API_USER_UPDATE_ONE_DESCRIPTION: string = 'Atualizar registro de usuário pelo ID e Corpo com os atributos a serem atualizados' ;
    public static readonly API_USER_UPDATE_ONE: ApiBodyOptions = {
        description: 'Exemplo de atualização de usuário',
        type: UserDTO
    };

    public static readonly API_USER_DELETE_ONE_DESCRIPTION: string = 'Remover registro de usuário pelo ID' ;
}

export default UserSwaggerExample;