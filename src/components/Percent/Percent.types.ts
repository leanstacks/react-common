export interface PropsWithTestId {
  testId?: string;
}

export interface PropsWithClassName {
  className?: string;
}

/**
 * Properties for the `Percent` component.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
 */
export interface PercentProps extends PropsWithClassName, PropsWithTestId {
  value: number;
}
