import { AssignmentCreateNestedManyWithoutModuleModelsInput } from "./AssignmentCreateNestedManyWithoutModuleModelsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ModuleModelCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutModuleModelsInput;
  content?: string | null;
  course?: CourseWhereUniqueInput | null;
  title?: string | null;
};
