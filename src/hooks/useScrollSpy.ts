import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 150) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const newHash = `#${sectionIds[i]}`;
            setActiveSection(sectionIds[i]);
            
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, '', newHash);
              window.dispatchEvent(new Event('hashchange'));
            }
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        const newHash = '#hero';
        setActiveSection('hero');
        if (window.location.hash !== newHash) {
          window.history.replaceState(null, '', newHash);
          window.dispatchEvent(new Event('hashchange'));
        }
      }
    };

    const lenis = (window as any).lenis;
    
    if (lenis) {
      lenis.on('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }
    
    handleScroll();

    return () => {
      if (lenis) {
        lenis.off('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [sectionIds, offset]);

  return activeSection;
};