import { SignDisplay } from '../../utils';

export interface PropsWithTestId {
  testId?: string;
}

export interface PropsWithClassName {
  className?: string;
}

/**
 * Properties for the `Percent` component.
 * @param {number} [minimumFractionDigits] - Optional. The minimum number of fraction digits to use. Default: `0`
 * @param {number} [maximumFractionDigits] - Optional. The maximum number of fraction digits to use. Default: the larger of `minimumFractionDigits` and `0`
 * @param {SignDisplay} [signDisplay] - Optional. When to display the sign for the number. Default: `auto`
 */
export interface PercentProps extends PropsWithClassName, PropsWithTestId {
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  signDisplay?: SignDisplay;
  value: number;
}
