import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MODULEMODEL_TITLE_FIELD } from "./ModuleModelTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const ModuleModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Assignment"
          target="moduleFieldId"
          label="Assignments"
        >
          <Datagrid rowClick="show">
            <TextField label="AssignedBy" source="assignedBy" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="dueDate" source="dueDate" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Module"
              source="modulemodel.id"
              reference="ModuleModel"
            >
              <TextField source={MODULEMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
