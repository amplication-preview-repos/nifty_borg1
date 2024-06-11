import { ModuleModel } from "../moduleModel/ModuleModel";

export type Assignment = {
  assignedBy: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  moduleField?: ModuleModel | null;
  title: string | null;
  updatedAt: Date;
};
