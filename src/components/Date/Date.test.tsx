import React from 'react';
import { render } from '@testing-library/react';

import Date from './Date';
import { DateFormat } from './Date.types';

describe('Date', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Date date={0} />);

    expect(getByTestId('date')).toBeDefined();
  });

  it('should render format Date successfully', () => {
    const { getByTestId } = render(<Date date={0} format={DateFormat.DATE} />);

    expect(getByTestId('date')).toBeDefined();
  });

  it('should render format DayOfWeek successfully', () => {
    const { getByTestId } = render(<Date date={0} format={DateFormat.DAY_OF_WEEK} />);

    expect(getByTestId('date')).toBeDefined();
  });

  it('should render format HoursAndMinutes successfully', () => {
    const { getByTestId } = render(<Date date={0} format={DateFormat.HOURS_AND_MINUTES} />);

    expect(getByTestId('date')).toBeDefined();
  });

  it('should render format Time successfully', () => {
    const { getByTestId } = render(<Date date={0} format={DateFormat.TIME} />);

    expect(getByTestId('date')).toBeDefined();
  });

  it('should render format Timestamp successfully', () => {
    const { getByTestId } = render(<Date date={0} format={DateFormat.TIMESTAMP} />);

    expect(getByTestId('date')).toBeDefined();
  });

  it('should render format TimestampShort successfully', () => {
    const { getByTestId } = render(<Date date={0} format={DateFormat.TIMESTAMP_SHORT} />);

    expect(getByTestId('date')).toBeDefined();
  });

  it('should use custom testID', () => {
    const { getByTestId, queryByTestId } = render(<Date date={0} testId="custom-testid" />);

    expect(queryByTestId('date')).toBeNull();
    expect(getByTestId('custom-testid')).toBeDefined();
  });

  it('should use classes from className property', () => {
    const { getByTestId } = render(<Date date={0} className="custom-class" />);

    expect(getByTestId('date').classList).toContain('custom-class');
  });
});
