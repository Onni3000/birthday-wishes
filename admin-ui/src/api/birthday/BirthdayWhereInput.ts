import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type BirthdayWhereInput = {
  day?: DateTimeFilter;
  id?: StringFilter;
};
