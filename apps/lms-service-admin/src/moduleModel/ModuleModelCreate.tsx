import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AssignmentTitle } from "../assignment/AssignmentTitle";
import { CourseTitle } from "../course/CourseTitle";

export const ModuleModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assignments"
          reference="Assignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssignmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
