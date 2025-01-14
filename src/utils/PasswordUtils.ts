import * as bcrypt from 'bcrypt';

class PasswordUtils {

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // O número de rounds de salt
    return await bcrypt.hash(password, saltRounds);
  }

  static comparePassword(password: string, hash: string): boolean {
    return bcrypt.compare(password, hash);
  }
}

export default PasswordUtils;