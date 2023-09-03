import React from 'react';
import classNames from 'classnames';

import { TextProps, TextVariant } from './Text.types';

const Text: React.FC<TextProps> = ({ children, className, variant = TextVariant.BodyCopy }) => {
  const getVariantClasses = (variant: TextVariant): string => {
    switch (variant) {
      case TextVariant.Heading1:
        return 'text-4xl font-bold';
      case TextVariant.Heading2:
        return 'text-3xl font-bold';
      case TextVariant.Heading3:
        return 'text-2xl font-bold';
      case TextVariant.BodyCopy:
      default:
        return '';
    }
  };

  return <div className={classNames(getVariantClasses(variant), className)}>{children}</div>;
};

export default Text;