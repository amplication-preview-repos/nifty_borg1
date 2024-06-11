import { AssignmentUpdateManyWithoutModuleModelsInput } from "./AssignmentUpdateManyWithoutModuleModelsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ModuleModelUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutModuleModelsInput;
  content?: string | null;
  course?: CourseWhereUniqueInput | null;
  title?: string | null;
};
