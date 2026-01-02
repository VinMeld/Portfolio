import React, { useState } from "react";
import { motion } from "framer-motion";

export const withScrollTrigger = (WrappedComponent: React.FC<any>) => {
  return (props: any) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <motion.div
        onViewportEnter={() => setIsVisible(true)}
        viewport={{ once: true }}
      >
        <WrappedComponent {...props} isVisible={isVisible} />
      </motion.div>
    );
  };
};
