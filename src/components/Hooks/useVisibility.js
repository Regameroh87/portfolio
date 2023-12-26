import { useEffect, useState } from 'react';

const UseVisibility = (elementId, threshold = 20) => {
    const [isVisible, setIsVisible] = useState(false);
  console.log("soy id", elementId)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);

      if (element) {
        const rect = element.getBoundingClientRect();

        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const porcentajeVisible = Math.round(((viewportHeight - rect.top) / viewportHeight) * 100);

        if (porcentajeVisible > threshold) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementId, threshold]);

  return isVisible
};

export default UseVisibility;
