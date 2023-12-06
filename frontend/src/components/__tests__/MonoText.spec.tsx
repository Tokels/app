import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { MonoText } from '../MonoText';
import { expect, it } from '@jest/globals';

it('renders correctly', () => {
  render(<MonoText>Hello</MonoText>);

  expect(screen.getByText('Hello')).toBeTruthy();
});
