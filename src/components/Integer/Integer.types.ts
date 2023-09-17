import { Unit, UnitDisplay } from '../../utils/constants';

/**
 * Properties for the `Integer` component.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
 */
export interface IntegerProps {
  className?: string;
  unit?: Unit;
  unitDisplay?: UnitDisplay;
  value: number;
  testId?: string;
}
