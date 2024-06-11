import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ModuleModelWhereInput = {
  assignments?: AssignmentListRelationFilter;
  content?: StringNullableFilter;
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
  title?: StringNullableFilter;
};
