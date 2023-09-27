import { SignDisplay, Unit, UnitDisplay } from '../../utils/constants';

/**
 * Properties for the `Decimal` component.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
 */
export interface DecimalProps {
  className?: string;
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  signDisplay?: SignDisplay;
  unit?: Unit;
  unitDisplay?: UnitDisplay;
  value: number;
  testId?: string;
}
