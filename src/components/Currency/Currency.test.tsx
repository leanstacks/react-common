import React from 'react';
import { render } from '@testing-library/react';

import Currency from './Currency';
import { CurrencyCode, CurrencyDisplay, CurrencySign } from '../../utils/constants';

describe('Currency', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Currency value={19.99} />);

    expect(getByTestId('currency')).toBeDefined();
  });

  it('should use custom test ID', () => {
    const { getByTestId, queryByTestId } = render(
      <Currency value={19.99} testId="custom-testid" />,
    );

    expect(queryByTestId('currency')).toBeNull();
    expect(getByTestId('custom-testid')).toBeDefined();
  });

  it('should use classes from className property', () => {
    const { getByTestId } = render(<Currency value={19.99} className="custom-class" />);

    expect(getByTestId('currency').classList).toContain('custom-class');
  });

  it('should use default currency code', () => {
    const { getByTestId } = render(<Currency value={19.99} />);

    expect(getByTestId('currency').textContent).toBe('$19.99');
  });

  it('should use specified currency code', () => {
    const { getByTestId } = render(<Currency value={19.99} currency={CurrencyCode.CAD} />);

    expect(getByTestId('currency').textContent).toBe('CA$19.99');
  });

  it('should use default currency display', () => {
    const { getByTestId } = render(<Currency value={19.99} currency={CurrencyCode.CAD} />);

    expect(getByTestId('currency').textContent).toBe('CA$19.99');
  });

  it('should use specified currency display', () => {
    const { getByTestId } = render(
      <Currency value={19.99} currency={CurrencyCode.CAD} currencyDisplay={CurrencyDisplay.Name} />,
    );

    expect(getByTestId('currency').textContent).toBe('19.99 Canadian dollars');
  });

  it('should use default currency sign', () => {
    const { getByTestId } = render(<Currency value={-19.99} />);

    expect(getByTestId('currency').textContent).toBe('-$19.99');
  });

  it('should use accounting currency sign', () => {
    const { getByTestId } = render(
      <Currency value={-19.99} currencySign={CurrencySign.Accounting} />,
    );

    expect(getByTestId('currency').textContent).toBe('($19.99)');
  });
});
