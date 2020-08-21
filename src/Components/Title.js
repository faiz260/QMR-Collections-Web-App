import React from 'react';
import useWebAnimations, {
    backInDown,
  } from "@wellyshen/use-web-animations";

export const Title = () => {
    const { ref} = useWebAnimations({
        ...backInDown,
        timing: {
          duration: 2000,
          direction: "alternate",
          easing: "ease-in-out",
        },
      });
    
    return (
        <div>
            <h1 ref={ref} style={{ fontSize: "40px" }}>Welcome To QMR Collections</h1>
        </div>
    )
}
