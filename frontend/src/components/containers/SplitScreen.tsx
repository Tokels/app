import React from 'react';
import type { FC, ReactElement } from 'react';
import { View } from 'react-native';
interface SplitScreenProps {
  children: ReactElement[];
  weigths?: number[];
  row?: boolean;
  styleChildren?: string;
  styleParent?: string;
  centered?: boolean;
}

const SplitScreen: FC<SplitScreenProps> = ({
  children,
  weigths = [],
  row = false,
  styleChildren = '',
  styleParent = '',
  centered = true,
}) => {
  // If no weigths are provided, w (weights) will default to 1 per element
  const w = weigths?.length > 0 ? weigths : children.map(() => 1);
  return (
    <View className={`flex flex-${row ? 'row' : 'col'} h-full w-full ${styleParent}`}>
      {children.map((component, idx) => {
        const flex = w[idx];
        return (
          <View
            className={`${centered && 'justify-center items-center'} ${styleChildren}`}
            key={`splitscreen-pane-${idx}-${component.key}`}
            style={{ flex }}
          >
            {component}
          </View>
        );
      })}
    </View>
  );
};

export default SplitScreen;
