import { HttpException } from "@nestjs/common";

class AlreadyExistException extends HttpException {
    constructor(message: string) {
        super(message, 409);
    }
}

export default AlreadyExistException;