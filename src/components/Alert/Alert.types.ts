import { PropsWithChildren } from 'react';
import { PropsWithClassName, PropsWithTestId } from '../../utils/types';

/**
 * The `AlertVariant` enumerates types of Alerts.
 */
export enum AlertVariant {
  Error = 'Error',
  Info = 'Info',
  Success = 'Success',
  Warning = 'Warning',
}

/**
 * Properties for the `Alert` component.
 * @param {AlertVariant} [variant] - Optional. The type of Alert. Default: `Info`
 */
export interface AlertProps extends PropsWithChildren, PropsWithClassName, PropsWithTestId {
  variant?: AlertVariant;
}
