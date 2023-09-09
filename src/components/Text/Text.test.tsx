import React from 'react';
import { render } from '@testing-library/react';

import Text from './Text';

describe('Text', () => {
  it('should render successfully', () => {
    const textValue = 'Test';

    const { getByTestId } = render(<Text>{textValue}</Text>);

    expect(getByTestId('text')).toBeDefined();
  });
});
