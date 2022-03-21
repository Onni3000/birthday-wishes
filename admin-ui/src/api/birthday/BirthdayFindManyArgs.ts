import { BirthdayWhereInput } from "./BirthdayWhereInput";
import { BirthdayOrderByInput } from "./BirthdayOrderByInput";

export type BirthdayFindManyArgs = {
  where?: BirthdayWhereInput;
  orderBy?: Array<BirthdayOrderByInput>;
  skip?: number;
  take?: number;
};
