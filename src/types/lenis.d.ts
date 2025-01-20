declare module 'lenis/dist/lenis-react' {
    import React from 'react';
    import { LenisOptions } from 'lenis';
  
    interface ReactLenisProps {
      root?: boolean;
      options?: LenisOptions;
      children?: React.ReactNode;
    }
  
    export const ReactLenis: React.FC<ReactLenisProps>;
  }
  