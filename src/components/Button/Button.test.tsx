import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';
import { ButtonVariant } from './Button.types';

describe('Button', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Button />);

    expect(getByTestId('button')).toBeDefined();
  });

  it('should use custom test ID', () => {
    const { getByTestId, queryByTestId } = render(<Button testId="custom-testid" />);

    expect(queryByTestId('button')).toBeNull();
    expect(getByTestId('custom-testid')).toBeDefined();
  });

  it('should use classes from className property', () => {
    const { getByTestId } = render(<Button className="custom-class" />);

    expect(getByTestId('button').classList).toContain('custom-class');
  });

  it('should render Primary variant', () => {
    const { getByTestId } = render(<Button variant={ButtonVariant.Primary} />);

    expect(getByTestId('button').classList).toContain('bg-blue-500');
  });

  it('should render Secondary variant', () => {
    const { getByTestId } = render(<Button variant={ButtonVariant.Secondary} />);

    expect(getByTestId('button').classList).toContain('bg-slate-500');
  });

  it('should render Text variant', () => {
    const { getByTestId } = render(<Button variant={ButtonVariant.Text} />);

    expect(getByTestId('button').classList).toContain('text-blue-500');
  });

  it('should render Primary variant when variant not specified', () => {
    const { getByTestId } = render(<Button />);

    expect(getByTestId('button').classList).toContain('bg-blue-500');
  });

  it('should have default type', () => {
    const { getByTestId } = render(<Button />);

    expect(getByTestId('button').getAttribute('type')).toBe('button');
  });

  it('should have submit type', () => {
    const { getByTestId } = render(<Button type="submit" />);

    expect(getByTestId('button').getAttribute('type')).toBe('submit');
  });

  it('should have reset type', () => {
    const { getByTestId } = render(<Button type="reset" />);

    expect(getByTestId('button').getAttribute('type')).toBe('reset');
  });

  it('should have default role', () => {
    const { getByTestId } = render(<Button />);

    expect(getByTestId('button').getAttribute('role')).toBe('button');
  });

  it('should have custom role', () => {
    const { getByTestId } = render(<Button role="custom-role" />);

    expect(getByTestId('button').getAttribute('role')).toBe('custom-role');
  });

  it('should have title', () => {
    const { getByTestId } = render(<Button title="custom-title" />);

    expect(getByTestId('button').getAttribute('title')).toBe('custom-title');
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<Button disabled />);

    expect(getByTestId('button').getAttribute('disabled')).not.toBeNull();
  });

  it('should call click handler function', () => {
    const mockClickHandler = jest.fn();

    render(<Button onClick={mockClickHandler} />);
    fireEvent.click(screen.getByTestId('button'));

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });

  it('should not call click handler function when disabled', () => {
    const mockClickHandler = jest.fn();

    render(<Button onClick={mockClickHandler} disabled />);
    fireEvent.click(screen.getByTestId('button'));

    expect(mockClickHandler).not.toHaveBeenCalled();
  });
});
