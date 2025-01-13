import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import PasswordUtils from "src/utils/PasswordUtils";
import User from "src/models/entities/User";
import { JwtService } from "@nestjs/jwt";

@Injectable()
class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.repository.findOneBy({ email });        

        if (user && (await PasswordUtils.comparePassword(password, user.password))) {
          const { password, ...result } = user;
          return result;
        }

        return null;
    }

    async login(user: any) {
        const payload = { username: user.email, sub: user.id };        
        return {
          access_token: this.jwtService.sign(payload),
        };
      }

}

export default AuthService;