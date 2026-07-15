declare module '*.svg' {
  import type { SvgProps } from 'react-native-svg';
  import type React from 'react';
  const content: React.ComponentType<SvgProps>;
  export default content;
}
