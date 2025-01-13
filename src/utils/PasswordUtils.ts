import * as bcrypt from 'bcrypt';

class PasswordUtils {

  static hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  static comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}

export default PasswordUtils;