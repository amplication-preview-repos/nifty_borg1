import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";
import { ModuleModelCreateNestedManyWithoutCoursesInput } from "./ModuleModelCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  modules?: ModuleModelCreateNestedManyWithoutCoursesInput;
  startDate?: Date | null;
  title?: string | null;
};
