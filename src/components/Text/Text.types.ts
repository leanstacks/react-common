import { PropsWithChildren } from 'react';

export enum TextVariant {
  Heading1 = 'Heading1',
  Heading2 = 'Heading2',
  Heading3 = 'Heading3',
  BodyCopy = 'BodyCopy',
}

export interface TextProps extends PropsWithChildren {
  className?: string;
  testId?: string;
  variant?: TextVariant;
}
