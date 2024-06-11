import { ModuleModel as TModuleModel } from "../api/moduleModel/ModuleModel";

export const MODULEMODEL_TITLE_FIELD = "title";

export const ModuleModelTitle = (record: TModuleModel): string => {
  return record.title?.toString() || String(record.id);
};
