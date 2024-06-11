import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ModuleModelListRelationFilter } from "../moduleModel/ModuleModelListRelationFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  id?: StringFilter;
  modules?: ModuleModelListRelationFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
