import React from 'react';
import { render } from '@testing-library/react';

import Alert from './Alert';
import { AlertVariant } from './Alert.types';

describe('Alert', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Alert />);

    expect(getByTestId('alert')).toBeDefined();
  });

  it('should use custom test ID', () => {
    const { getByTestId, queryByTestId } = render(<Alert testId="custom-testid" />);

    expect(queryByTestId('alert')).toBeNull();
    expect(getByTestId('custom-testid')).toBeDefined();
  });

  it('should use classes from className property', () => {
    const { getByTestId } = render(<Alert className="custom-class" />);

    expect(getByTestId('alert').classList).toContain('custom-class');
  });

  it('should render the Info variant', () => {
    const { getByTestId } = render(<Alert variant={AlertVariant.Info} />);

    expect(getByTestId('alert').classList).toContain('bg-blue-800/90');
  });

  it('should render the Warning variant', () => {
    const { getByTestId } = render(<Alert variant={AlertVariant.Warning} />);

    expect(getByTestId('alert').classList).toContain('bg-amber-400/90');
  });

  it('should render the Error variant', () => {
    const { getByTestId } = render(<Alert variant={AlertVariant.Error} />);

    expect(getByTestId('alert').classList).toContain('bg-red-800/90');
  });

  it('should render the Success variant', () => {
    const { getByTestId } = render(<Alert variant={AlertVariant.Success} />);

    expect(getByTestId('alert').classList).toContain('bg-green-800/90');
  });

  it('should render the Info variant when variant not specified', () => {
    const { getByTestId } = render(<Alert />);

    expect(getByTestId('alert').classList).toContain('bg-blue-800/90');
  });

  it('should have role=alert', () => {
    const { getByTestId } = render(<Alert />);

    expect(getByTestId('alert').getAttribute('role')).toBe('alert');
  });
});
