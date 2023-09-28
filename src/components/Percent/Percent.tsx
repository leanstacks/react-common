import React, { useMemo } from 'react';

import { PercentProps } from './Percent.types';
import { formatNumber } from '../../utils/numbers';

/**
 * The `Percent` React component formats and renders a percent value.
 * @param {PercentProps} props = Component properties.
 * @returns {JSX.Element} JSX
 */
const Percent: React.FC<PercentProps> = ({
  className,
  value,
  testId = 'percent',
}: PercentProps): JSX.Element => {
  const val = useMemo(() => {
    const formatOptions: Intl.NumberFormatOptions = { style: 'percent' };
    return formatNumber(value, formatOptions);
  }, [value]);

  return (
    <span className={className} data-testid={testId}>
      {val}
    </span>
  );
};

export default Percent;
