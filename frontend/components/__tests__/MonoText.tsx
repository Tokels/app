import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { MonoText } from '../MonoText';

it('renders correctly', () => {
  render(<MonoText>Hello</MonoText>);

  expect(screen.getByText('Hello')).toBeTruthy();
});
