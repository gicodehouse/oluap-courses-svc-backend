import { ApiBodyOptions } from "@nestjs/swagger";
import LoginDTO from "../dtos/auth/LoginDTO";
import CourseDTO from "../dtos/course/CourseDTO";

class AuthSwaggerExample {

    public static readonly API_AUTH_LOGIN: ApiBodyOptions = {
        description: 'Exemplo de login',
        type: LoginDTO
    };
}

export default AuthSwaggerExample;