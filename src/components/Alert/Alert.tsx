import React from 'react';
import classNames from 'classnames';
import { AlertProps, AlertVariant } from './Alert.types';

const Alert: React.FC<AlertProps> = ({
  children,
  className,
  variant = AlertVariant.Info,
  testId = 'alert',
}: AlertProps): JSX.Element => {
  const getVariantClasses = (variant: AlertVariant): string => {
    switch (variant) {
      case AlertVariant.Error:
        return 'bg-red-800/90 text-white/80';
      case AlertVariant.Info:
      default:
        return 'bg-slate-300/70';
    }
  };

  return (
    <div
      className={classNames('rounded-lg p-3', getVariantClasses(variant), className)}
      role="alert"
      data-testid={testId}
    >
      {children}
    </div>
  );
};

export default Alert;
