import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRolesEnum } from "./user-roles.enum";
export declare class UserRepository extends Repository<User> {
    createUser(createUserDto: CreateUserDto, role: UserRolesEnum): Promise<User>;
    private hashPassword;
}
