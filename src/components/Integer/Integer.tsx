import React, { useMemo } from 'react';

import { IntegerProps } from './Integer.types';
import { formatNumber } from '../../utils/numbers';

/**
 * Format and display an integer number.
 * @param {IntegerProps} props - Component properties.
 * @returns {JSX.Element} JSX
 */
const Integer: React.FC<IntegerProps> = ({
  className,
  unit,
  unitDisplay,
  value,
  testId = 'integer',
}: IntegerProps): JSX.Element => {
  const val = useMemo(() => {
    // if formatting with units
    if (unit) {
      return formatNumber(value, {
        style: 'unit',
        unit,
        unitDisplay,
        maximumFractionDigits: 0,
      });
    }
    // everything else
    return formatNumber(value, { maximumFractionDigits: 0 });
  }, [value, unit, unitDisplay]);

  return (
    <span className={className} data-testid={testId}>
      {val}
    </span>
  );
};

export default Integer;
