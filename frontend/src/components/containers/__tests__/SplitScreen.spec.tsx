import * as React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import SplitScreen from '../SplitScreen';
import { expect, it } from '@jest/globals';

it('Styles it correctly (flex)', () => {
  const tree = renderer
    .create(
      <SplitScreen weigths={[1, 1, 1, 2, 1]}>
        <Text>This should have flex: 1</Text>
        <Text>This should have flex: 1</Text>
        <Text>This should have flex: 1</Text>
        <Text>This should have flex: 2</Text>
        <Text>This should have flex: 1</Text>
        <Text>This should have flex: 1</Text>
      </SplitScreen>,
    )
    .toJSON();

  let flex;
  if (tree) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    flex = (tree as any).children[3].props.style.flex === 2;
  }
  expect(flex).toBeTruthy();
});
