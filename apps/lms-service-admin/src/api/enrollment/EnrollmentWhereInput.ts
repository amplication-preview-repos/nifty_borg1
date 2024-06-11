import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EnrollmentWhereInput = {
  course?: CourseWhereUniqueInput;
  enrollmentDate?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
