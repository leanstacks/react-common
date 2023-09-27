import { CurrencyCode, CurrencyDisplay, CurrencySign } from '../../utils/constants';

export interface CurrencyProps {
  className?: string;
  currency?: CurrencyCode;
  currencyDisplay?: CurrencyDisplay;
  currencySign?: CurrencySign;
  value: number;
  testId?: string;
}
