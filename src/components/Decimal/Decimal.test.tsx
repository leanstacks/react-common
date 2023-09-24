import React from 'react';
import { render } from '@testing-library/react';

import Decimal from './Decimal';
import { Unit, UnitDisplay } from '../../utils/constants';

describe('Decimal', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Decimal value={3.1415} />);

    expect(getByTestId('decimal')).toBeDefined();
  });

  it('should use custom test ID', () => {
    const { getByTestId, queryByTestId } = render(
      <Decimal value={3.1415} testId="custom-testid" />,
    );

    expect(queryByTestId('decimal')).toBeNull();
    expect(getByTestId('custom-testid')).toBeDefined();
  });

  it('should use classes from className property', () => {
    const { getByTestId } = render(<Decimal value={3.1415} className="custom-class" />);

    expect(getByTestId('decimal').classList).toContain('custom-class');
  });

  it('should render integer value as decimal', () => {
    const { getByTestId } = render(<Decimal value={3} minimumFractionDigits={1} />);

    expect(getByTestId('decimal').textContent).toBe('3.0');
  });

  it('should render decimal with units', () => {
    const { getByTestId } = render(<Decimal value={3.1415} unit={Unit.Centimeter} />);

    expect(getByTestId('decimal').textContent).toBe('3.142 cm');
  });

  it('should render decimal with units and unit display', () => {
    const { getByTestId } = render(
      <Decimal value={3.1415} unit={Unit.Centimeter} unitDisplay={UnitDisplay.Narrow} />,
    );

    expect(getByTestId('decimal').textContent).toBe('3.142cm');
  });

  it('should render integer value as decimal', () => {
    const { getByTestId } = render(<Decimal value={3} minimumFractionDigits={1} />);

    expect(getByTestId('decimal').textContent).toBe('3.0');
  });

  it('should render with minimum fraction digits', () => {
    const { getByTestId } = render(<Decimal value={3.1415} minimumFractionDigits={6} />);

    expect(getByTestId('decimal').textContent).toBe('3.141500');
  });

  it('should render with maximum fraction digits', () => {
    const { getByTestId } = render(<Decimal value={3.1415} maximumFractionDigits={1} />);

    expect(getByTestId('decimal').textContent).toBe('3.1');
  });
});
