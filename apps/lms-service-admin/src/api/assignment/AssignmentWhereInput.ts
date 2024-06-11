import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ModuleModelWhereUniqueInput } from "../moduleModel/ModuleModelWhereUniqueInput";

export type AssignmentWhereInput = {
  assignedBy?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  moduleField?: ModuleModelWhereUniqueInput;
  title?: StringNullableFilter;
};
