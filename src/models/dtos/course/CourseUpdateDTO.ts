import { PartialType } from "@nestjs/mapped-types";
import CouseDTO from "./CourseDTO";

class CourseUpdateDTO extends PartialType(CouseDTO) {}
export default CourseUpdateDTO;