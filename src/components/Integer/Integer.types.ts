import { Unit, UnitDisplay } from '../../utils/constants';

export interface IntegerProps {
  className?: string;
  unit?: Unit;
  unitDisplay?: UnitDisplay;
  value: number;
  testId?: string;
}
