import React from 'react';
import { render } from '@testing-library/react';

import Text from './Text';
import { TextVariant } from './Text.types';

describe('Text', () => {
  it('should render successfully', () => {
    const textValue = 'Test';

    const { getByTestId } = render(<Text>{textValue}</Text>);

    expect(getByTestId('text')).toBeDefined();
  });

  it('should render Heading1', () => {
    const textValue = 'Test';

    const { getByTestId } = render(<Text variant={TextVariant.Heading1}>{textValue}</Text>);

    expect(getByTestId('text').classList).toContain('text-4xl');
  });

  it('should render Heading2', () => {
    const textValue = 'Test';

    const { getByTestId } = render(<Text variant={TextVariant.Heading2}>{textValue}</Text>);

    expect(getByTestId('text').classList).toContain('text-3xl');
  });

  it('should render Heading3', () => {
    const textValue = 'Test';

    const { getByTestId } = render(<Text variant={TextVariant.Heading3}>{textValue}</Text>);

    expect(getByTestId('text').classList).toContain('text-2xl');
  });

  it('should render BodyCopy', () => {
    const textValue = 'Test';

    const { getByTestId } = render(<Text variant={TextVariant.BodyCopy}>{textValue}</Text>);

    expect(getByTestId('text').classList.length).toBe(0);
  });

  it('should render BodyCopy when variant not supplied', () => {
    const textValue = 'Test';

    const { getByTestId } = render(<Text>{textValue}</Text>);

    expect(getByTestId('text').classList.length).toBe(0);
  });

  it('should use custom test ID', () => {
    const textValue = 'Test';

    const { getByTestId } = render(<Text testId="custom-testid">{textValue}</Text>);

    expect(getByTestId('custom-testid')).toBeDefined();
  });

  it('should use classes from className property', () => {
    const textValue = 'Test';

    const { getByTestId } = render(<Text className="custom-class">{textValue}</Text>);

    expect(getByTestId('text').classList).toContain('custom-class');
  });
});
