import React, { useMemo } from 'react';

import { DecimalProps } from './decimal.types';
import { formatNumber } from '../../utils/numbers';

/**
 * Format and display an decimal number.
 * @param {DecimalProps} props - Component properties.
 * @returns {JSX.Element} JSX
 */
const Decimal: React.FC<DecimalProps> = ({
  className,
  maximumFractionDigits,
  minimumFractionDigits,
  unit,
  unitDisplay,
  value,
  testId = 'decimal',
}: DecimalProps): JSX.Element => {
  const val = useMemo(() => {
    // if formatting with units
    if (unit) {
      return formatNumber(value, {
        style: 'unit',
        unit,
        unitDisplay,
        maximumFractionDigits,
        minimumFractionDigits,
      });
    }
    // everything else
    return formatNumber(value, { maximumFractionDigits, minimumFractionDigits });
  }, [value, maximumFractionDigits, minimumFractionDigits, unit, unitDisplay]);

  return (
    <span className={className} data-testid={testId}>
      {val}
    </span>
  );
};

export default Decimal;
