import PasswordUtils from 'src/utils/PasswordUtils';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column({ unique: true })
    email: string;
    
    @Column()
    password: string;
    
    @CreateDateColumn({ 
        type: 'timestamp', 
        default: () => 'CURRENT_TIMESTAMP' 
    })
    created_at: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = PasswordUtils.hashPassword(this.password);
    }

    @BeforeUpdate()
    async updateHashPassword() {
        this.password = PasswordUtils.hashPassword(this.password);
    }
}

export default User;