import { SortOrder } from "../../util/SortOrder";

export type AssignmentOrderByInput = {
  assignedBy?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  moduleFieldId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
