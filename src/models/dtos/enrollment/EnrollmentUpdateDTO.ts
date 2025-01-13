import { PartialType } from "@nestjs/mapped-types";
import EnrollmentDTO from "./EnrollmentDTO";

class EnrollmentUpdateDTO extends PartialType(EnrollmentDTO) {}
export default EnrollmentUpdateDTO;