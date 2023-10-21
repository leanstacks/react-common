import { SignDisplay, Unit, UnitDisplay } from '../../utils/constants';
import { PropsWithClassName, PropsWithTestId } from '../../utils/types';

/**
 * Properties for the `Decimal` component.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
 */
export interface DecimalProps extends PropsWithClassName, PropsWithTestId {
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  signDisplay?: SignDisplay;
  unit?: Unit;
  unitDisplay?: UnitDisplay;
  value: number;
}
