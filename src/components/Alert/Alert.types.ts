import { PropsWithChildren } from 'react';
import { PropsWithClassName, PropsWithTestId } from '../../utils/types';

export enum AlertVariant {
  Error = 'Error',
  Info = 'Info',
  Success = 'Success',
  Warning = 'Warning',
}

export interface AlertProps extends PropsWithChildren, PropsWithClassName, PropsWithTestId {
  variant?: AlertVariant;
}
