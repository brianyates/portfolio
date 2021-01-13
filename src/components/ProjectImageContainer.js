import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const threshold = 0.68;
const ProjectImageContainer = ({ id, handleIntersect, children }) => {
  const ref = React.useRef(null);
  useIntersectionObserver(
    threshold,
    React.useCallback(
      ([entry]) => {
        if (entry.intersectionRatio > threshold) {
          handleIntersect();
        }
      },
      [handleIntersect]
    ),
    ref
  );
  return (
    <div id={id} ref={ref}>
      {children}
    </div>
  );
};

export default ProjectImageContainer;
