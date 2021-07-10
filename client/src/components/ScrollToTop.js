import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { Services } = useLocation();

  useEffect(() => {
    window.scrollTo(20, 0);
  }, ["/services"]);

  return null;
}
// const ScrollToTop = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default ScrollToTop
