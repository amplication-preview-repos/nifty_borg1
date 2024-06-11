import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ModuleModelTitle } from "../moduleModel/ModuleModelTitle";

export const AssignmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AssignedBy" source="assignedBy" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <ReferenceInput
          source="moduleField.id"
          reference="ModuleModel"
          label="Module"
        >
          <SelectInput optionText={ModuleModelTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
