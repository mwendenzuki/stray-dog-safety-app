import { useEffect, useRef } from 'react';

function ConfirmationAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    // Create confetti elements
    const colors = ['#FFC107', '#FF9800', '#4CAF50', '#2196F3', '#9C27B0'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      const size = Math.random() * 10 + 5;
      
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.position = 'absolute';
      confetti.style.top = '50%';
      confetti.style.left = '50%';
      confetti.style.borderRadius = '50%';
      confetti.style.transform = 'translate(-50%, -50%)';
      confetti.style.opacity = '0';
      
      container.appendChild(confetti);
      
      // Animate the confetti
      const angle = Math.random() * Math.PI * 2;
      const distance = 150 + Math.random() * 100;
      const duration = 500 + Math.random() * 1000;
      
      const keyframes = [
        {
          opacity: 1,
          transform: 'translate(-50%, -50%) scale(0)'
        },
        {
          opacity: 1,
          transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1)`
        },
        {
          opacity: 0,
          transform: `translate(calc(-50% + ${Math.cos(angle) * (distance + 50)}px), calc(-50% + ${Math.sin(angle) * (distance + 50)}px)) scale(0)`
        }
      ];
      
      confetti.animate(keyframes, {
        duration,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        delay: Math.random() * 500
      });
    }
    
    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden" style={{ minHeight: '400px' }}>
      <div ref={containerRef} className="absolute inset-0">
        {/* Confetti will be added here via JS */}
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          Your report has been submitted successfully. Our team will check it soon!
        </p>
        
        <img
          src="https://img.icons8.com/color/96/000000/dog.png"
          alt="Dog Icon"
          className="w-16 h-16 animate-pulse"
        />
      </div>
    </div>
  );
}

export default ConfirmationAnimation;