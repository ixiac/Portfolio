import { useState, useEffect } from 'react';
import { TextScramble } from '@/components/ui/text-scramble';
import { TextEffect } from '@/components/ui/text-effect';

export function Intro({ onComplete }: { onComplete: () => void }) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showDomain, setShowDomain] = useState(false);
  const [hideGenerating, setHideGenerating] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHideGenerating(true);
    }, 1500);

    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 1800);

    const domainTimer = setTimeout(() => {
      setShowDomain(true);
    }, 2500);

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(welcomeTimer);
      clearTimeout(domainTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900">
      <div 
        className={`flex flex-col items-center gap-8 transition-opacity duration-500 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {!hideGenerating && (
          <TextScramble
            className="font-mono text-3xl font-bold text-white"
            duration={0.8}
            characterSet=". "
          >
            Generating the interface...
          </TextScramble>
        )}
        
        <div className="flex items-center gap-3 text-4xl font-bold">
          {showWelcome && (
            <TextEffect 
              per="word" 
              as="span" 
              preset="slide"
              className="text-white"
            >
              Welcome to
            </TextEffect>
          )}
          
          <span className="text-emerald-500">
            {showDomain && (
              <TextEffect 
                per="char" 
                as="span" 
                preset="fade"
                delay={0.3}
              >
                bienm.vercel.app
              </TextEffect>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}