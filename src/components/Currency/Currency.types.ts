import { CurrencyCode, CurrencyDisplay, CurrencySign } from '../../utils/constants';

/**
 * Properties for the `Currency` component.
 * @param {string} [className] - Optional. CSS classes to apply to the component.
 * @param {CurrencyCode} [currency] - Optional. The ISO 4217 currency code. Default: `USD`.
 * @param {CurrencyDisplay} [currencyDisplay]  - Optional. How the currency is displayed. Default: `symbol`.
 * @param {CurrencySign} [currencySign] - Optional. How negative values are displayed. Default: `standard`.
 * @param {number} value - The amount.
 * @param {string} [testId] - Optional. A test library identifier. Default: `currency`.
 */
export interface CurrencyProps {
  className?: string;
  currency?: CurrencyCode;
  currencyDisplay?: CurrencyDisplay;
  currencySign?: CurrencySign;
  value: number;
  testId?: string;
}
