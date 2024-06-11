import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";
import { ModuleModelUpdateManyWithoutCoursesInput } from "./ModuleModelUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
  modules?: ModuleModelUpdateManyWithoutCoursesInput;
  startDate?: Date | null;
  title?: string | null;
};
