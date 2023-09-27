import React from 'react';
import { render } from '@testing-library/react';

import Integer from './Integer';
import { SignDisplay, Unit, UnitDisplay } from '../../utils/constants';

describe('Integer', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Integer value={1000} />);

    expect(getByTestId('integer')).toBeDefined();
  });

  it('should use custom test ID', () => {
    const { getByTestId, queryByTestId } = render(<Integer value={1000} testId="custom-testid" />);

    expect(queryByTestId('integer')).toBeNull();
    expect(getByTestId('custom-testid')).toBeDefined();
  });

  it('should use classes from className property', () => {
    const { getByTestId } = render(<Integer value={1000} className="custom-class" />);

    expect(getByTestId('integer').classList).toContain('custom-class');
  });

  it('should render decimal value as integer', () => {
    const { getByTestId } = render(<Integer value={1000.1234} />);

    expect(getByTestId('integer').textContent).toBe('1,000');
  });

  it('should render integer with units', () => {
    const { getByTestId } = render(<Integer value={1000} unit={Unit.Centimeter} />);

    expect(getByTestId('integer').textContent).toBe('1,000 cm');
  });

  it('should render integer with units and unit display', () => {
    const { getByTestId } = render(
      <Integer value={1000} unit={Unit.Centimeter} unitDisplay={UnitDisplay.Narrow} />,
    );

    expect(getByTestId('integer').textContent).toBe('1,000cm');
  });

  it('should render with sign displayed always', () => {
    const { getByTestId } = render(
      <div>
        <Integer testId="positive" value={1000} signDisplay={SignDisplay.Always} />
        <Integer testId="negative" value={-1000} signDisplay={SignDisplay.Always} />
        <Integer testId="zero" value={0} signDisplay={SignDisplay.Always} />
      </div>,
    );

    expect(getByTestId('positive').textContent).toBe('+1,000');
    expect(getByTestId('negative').textContent).toBe('-1,000');
    expect(getByTestId('zero').textContent).toBe('+0');
  });

  it('should render with sign only on negative values', () => {
    const { getByTestId } = render(
      <div>
        <Integer testId="positive" value={1000} signDisplay={SignDisplay.Auto} />
        <Integer testId="negative" value={-1000} signDisplay={SignDisplay.Auto} />
        <Integer testId="zero" value={0} signDisplay={SignDisplay.Auto} />
      </div>,
    );

    expect(getByTestId('positive').textContent).toBe('1,000');
    expect(getByTestId('negative').textContent).toBe('-1,000');
    expect(getByTestId('zero').textContent).toBe('0');
  });

  it('should render with no sign', () => {
    const { getByTestId } = render(
      <div>
        <Integer testId="positive" value={1000} signDisplay={SignDisplay.Never} />
        <Integer testId="negative" value={-1000} signDisplay={SignDisplay.Never} />
        <Integer testId="zero" value={0} signDisplay={SignDisplay.Never} />
      </div>,
    );

    expect(getByTestId('positive').textContent).toBe('1,000');
    expect(getByTestId('negative').textContent).toBe('1,000');
    expect(getByTestId('zero').textContent).toBe('0');
  });

  it('should render with sign displayed except for zero', () => {
    const { getByTestId } = render(
      <div>
        <Integer testId="positive" value={1000} signDisplay={SignDisplay.ExceptZero} />
        <Integer testId="negative" value={-1000} signDisplay={SignDisplay.ExceptZero} />
        <Integer testId="zero" value={0} signDisplay={SignDisplay.ExceptZero} />
      </div>,
    );

    expect(getByTestId('positive').textContent).toBe('+1,000');
    expect(getByTestId('negative').textContent).toBe('-1,000');
    expect(getByTestId('zero').textContent).toBe('0');
  });
});
