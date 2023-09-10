export enum DateFormat {
  DATE = 'MM/DD/YYYY',
  DAY_OF_WEEK = 'dddd',
  HOURS_AND_MINUTES = 'H[h] mm[m]',
  TIME = 'h:mma',
  TIMESTAMP_SHORT = 'h:mma ddd MMM D',
  TIMESTAMP = 'dddd MMMM D [at] h:mma',
}

export interface DateProps {
  className?: string;
  date: string | number;
  format?: DateFormat;
  testId?: string;
}
