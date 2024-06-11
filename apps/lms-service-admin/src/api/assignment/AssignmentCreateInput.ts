import { ModuleModelWhereUniqueInput } from "../moduleModel/ModuleModelWhereUniqueInput";

export type AssignmentCreateInput = {
  assignedBy?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  moduleField?: ModuleModelWhereUniqueInput | null;
  title?: string | null;
};
