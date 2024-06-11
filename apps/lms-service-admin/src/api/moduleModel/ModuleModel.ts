import { Assignment } from "../assignment/Assignment";
import { Course } from "../course/Course";

export type ModuleModel = {
  assignments?: Array<Assignment>;
  content: string | null;
  course?: Course | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
