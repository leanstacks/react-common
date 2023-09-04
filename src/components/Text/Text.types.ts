import { PropsWithChildren } from 'react';

export enum TextVariant {
  Heading1,
  Heading2,
  Heading3,
  BodyCopy,
}

export interface TextProps extends PropsWithChildren {
  className?: string;
  variant?: TextVariant;
}
