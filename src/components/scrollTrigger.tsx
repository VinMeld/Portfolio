import ScrollTrigger from "react-scroll-trigger";
import React, { useState } from "react";

export const withScrollTrigger = (WrappedComponent: React.FC<any>) => {
  return (props: any) => {
    const [isVisible, setIsVisible] = useState(false);

    const onEnterViewport = () => {
      setIsVisible(true);
    };

    return (
      // @ts-ignore
      <ScrollTrigger onEnter={onEnterViewport}>
        <WrappedComponent {...props} isVisible={isVisible} />
      </ScrollTrigger>
    );
  };
};
