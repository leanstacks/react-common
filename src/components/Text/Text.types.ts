import { PropsWithChildren } from 'react';
import { PropsWithTestId } from '../../utils/types';

export enum TextVariant {
  Heading1 = 'Heading1',
  Heading2 = 'Heading2',
  Heading3 = 'Heading3',
  BodyCopy = 'BodyCopy',
}

export interface TextProps extends PropsWithChildren, PropsWithTestId {
  className?: string;
  variant?: TextVariant;
}
