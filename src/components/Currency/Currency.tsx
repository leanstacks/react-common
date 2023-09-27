import React, { useMemo } from 'react';

import { CurrencyProps } from './Currency.types';
import { CurrencyCode } from '../../utils/constants';
import { formatNumber } from '../../utils/numbers';

const Currency: React.FC<CurrencyProps> = ({
  className,
  currency = CurrencyCode.USD,
  currencyDisplay,
  currencySign,
  value,
  testId = 'currency',
}: CurrencyProps) => {
  const val = useMemo(() => {
    const formatOptions: Intl.NumberFormatOptions = {
      style: 'currency',
      currency,
      currencyDisplay,
      currencySign,
    };
    return formatNumber(value, formatOptions);
  }, [value, currency, currencyDisplay, currencySign]);

  return (
    <span className={className} data-testid={testId}>
      {val}
    </span>
  );
};

export default Currency;
