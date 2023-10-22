import React from 'react';
import classNames from 'classnames';

import { ButtonProps, ButtonVariant } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  role = 'button',
  variant = ButtonVariant.Primary,
  testId = 'button',
  type = 'button',
  ...props
}: ButtonProps): JSX.Element => { 
  const getVariantClasses = (variant: ButtonVariant): string => {
    switch (variant) {
      case ButtonVariant.Secondary:
        return 'bg-slate-500 text-white';
      case ButtonVariant.Text:
        return 'text-blue-500';
      case ButtonVariant.Primary:
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <button
      type={type}
      className={classNames(
        'rounded-full p-2 enabled:hover:opacity-80 disabled:opacity-50',
        getVariantClasses(variant),
        className,
      )}
      role={role}
      data-testid={testId}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
