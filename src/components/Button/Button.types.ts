import { AriaRole, MouseEventHandler, PropsWithChildren } from 'react';
import { PropsWithClassName, PropsWithTestId } from '../../utils/types';

export enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Text = 'Text',
}

export interface ButtonProps extends PropsWithChildren, PropsWithClassName, PropsWithTestId {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  role?: AriaRole;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
}
