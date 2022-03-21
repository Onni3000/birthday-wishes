import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput } from "react-admin";

export const BirthdayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="day" source="day" />
      </SimpleForm>
    </Edit>
  );
};
