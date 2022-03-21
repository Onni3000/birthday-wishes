import { Birthday as TBirthday } from "../api/birthday/Birthday";

export const BIRTHDAY_TITLE_FIELD = "id";

export const BirthdayTitle = (record: TBirthday): string => {
  return record.id || record.id;
};
