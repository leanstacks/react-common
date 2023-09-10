import React from 'react';
import { render } from '@testing-library/react';
import dayjs from 'dayjs';

import DayOfTheWeek from './DayOfTheWeek';

describe('DayOfTheWeek', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<DayOfTheWeek date={0} />);

    expect(getByTestId('day-of-the-week')).toBeDefined();
  });

  it('should use custom testID', () => {
    const { getByTestId, queryByTestId } = render(<DayOfTheWeek date={0} testId="custom-testid" />);

    expect(queryByTestId('day-of-the-week')).toBeNull();
    expect(getByTestId('custom-testid')).toBeDefined();
  });

  it('should use classes from className property', () => {
    const { getByTestId } = render(<DayOfTheWeek date={0} className="custom-class" />);

    expect(getByTestId('day-of-the-week').classList).toContain('custom-class');
  });

  it('should render relative Today', () => {
    const { getByTestId } = render(<DayOfTheWeek date={new Date().toISOString()} relative />);

    expect(getByTestId('day-of-the-week').textContent).toBe('Today');
  });

  it('should render relative Tomorrow', () => {
    const tomorrow = dayjs().add(1, 'day');
    const { getByTestId } = render(<DayOfTheWeek date={tomorrow.toISOString()} relative />);

    expect(getByTestId('day-of-the-week').textContent).toBe('Tomorrow');
  });

  it('should render relative Yesterday', () => {
    const yesterday = dayjs().subtract(1, 'day');
    const { getByTestId } = render(<DayOfTheWeek date={yesterday.toISOString()} relative />);

    expect(getByTestId('day-of-the-week').textContent).toBe('Yesterday');
  });

  it('should render relative day of the week', () => {
    const dow = dayjs('09/01/2023');
    const { getByTestId } = render(<DayOfTheWeek date={dow.toISOString()} relative />);

    expect(getByTestId('day-of-the-week').textContent).toBe('Friday');
  });
});
