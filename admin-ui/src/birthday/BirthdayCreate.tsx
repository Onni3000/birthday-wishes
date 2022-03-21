import * as React from "react";
import { Create, SimpleForm, CreateProps, DateInput } from "react-admin";

export const BirthdayCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="day" source="day" />
      </SimpleForm>
    </Create>
  );
};
