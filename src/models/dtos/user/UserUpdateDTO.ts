import { PartialType } from "@nestjs/mapped-types";
import UserDTO from "./UserDTO";

class UserUpdateDTO extends PartialType(UserDTO) {}
export default UserUpdateDTO;