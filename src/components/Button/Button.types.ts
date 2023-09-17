import { AriaRole, MouseEventHandler, PropsWithChildren } from 'react';

export enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Text = 'Text',
}

export interface ButtonProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  role?: AriaRole;
  testId?: string;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
}
