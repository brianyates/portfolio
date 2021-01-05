import React from "react";
import "intersection-observer";

function getIO() {
  if (typeof window === "undefined") {
    return null;
  }
  return IntersectionObserver;
}

const useIntersectionObserver = (threshold, callback, nodeRef) => {
  const observer = React.useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold,
  };
  React.useEffect(() => {
    const IO = getIO();
    if (IO) {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IO(callback, options);
      const currentObserver = observer.current;
      if (nodeRef.current) {
        currentObserver.observe(nodeRef.current);
      }
      return () => currentObserver.disconnect();
    }
  }, [nodeRef, options, callback]);
};

export default useIntersectionObserver;
