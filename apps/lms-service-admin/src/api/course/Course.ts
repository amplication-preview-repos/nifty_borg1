import { Enrollment } from "../enrollment/Enrollment";
import { ModuleModel } from "../moduleModel/ModuleModel";

export type Course = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  enrollments?: Array<Enrollment>;
  id: string;
  modules?: Array<ModuleModel>;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
