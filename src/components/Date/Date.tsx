import React from 'react';
import dayjs from 'dayjs';

import { DateFormat, DateProps } from './Date.types';

const Date: React.FC<DateProps> = ({
  className,
  date,
  testId = 'date',
  format = DateFormat.DATE,
}) => {
  return (
    <span className={className} data-testid={testId}>
      {dayjs(date).format(format)}
    </span>
  );
};

export default Date;
