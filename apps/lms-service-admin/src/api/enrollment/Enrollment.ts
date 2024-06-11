import { Course } from "../course/Course";
import { User } from "../user/User";

export type Enrollment = {
  course?: Course | null;
  createdAt: Date;
  enrollmentDate: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
