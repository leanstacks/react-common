import { PropsWithClassName, PropsWithTestId } from "../../utils/types";

export interface DayOfTheWeekProps extends PropsWithClassName, PropsWithTestId {
  date: string | number;
  relative?: boolean;
}
