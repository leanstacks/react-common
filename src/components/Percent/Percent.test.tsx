import React from 'react';
import { render } from '@testing-library/react';

import Percent from './Percent';
import { SignDisplay } from '../../utils';

describe('Percent', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Percent value={0.12345678} />);

    expect(getByTestId('percent')).toBeDefined();
  });

  it('should use custom test ID', () => {
    const { getByTestId, queryByTestId } = render(
      <Percent value={0.12345678} testId="custom-testid" />,
    );

    expect(queryByTestId('percent')).toBeNull();
    expect(getByTestId('custom-testid')).toBeDefined();
  });

  it('should use classes from className property', () => {
    const { getByTestId } = render(<Percent value={0.12345678} className="custom-class" />);

    expect(getByTestId('percent').classList).toContain('custom-class');
  });

  it('should show a minimum number of decimal places', () => {
    const { getByTestId } = render(<Percent value={0.12} minimumFractionDigits={2} />);

    expect(getByTestId('percent').textContent).toBe('12.00%');
  });

  it('should show a maximum number of decimal places', () => {
    const { getByTestId } = render(<Percent value={0.12345678} maximumFractionDigits={2} />);

    expect(getByTestId('percent').textContent).toBe('12.35%');
  });

  it('should always show sign', () => {
    const { getByTestId } = render(
      <div>
        <Percent testId="positive" value={0.12} signDisplay={SignDisplay.Always} />
        <Percent testId="negative" value={-0.12} signDisplay={SignDisplay.Always} />
        <Percent testId="zero" value={0} signDisplay={SignDisplay.Always} />
      </div>,
    );

    expect(getByTestId('positive').textContent).toBe('+12%');
    expect(getByTestId('negative').textContent).toBe('-12%');
    expect(getByTestId('zero').textContent).toBe('+0%');
  });
});
