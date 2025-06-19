import React from 'react';
import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text = 'Get Started Today',
  onClick = () => window.open('mailto:guishengchen76@gmail.com'),
  className = '',
}) => {
  return (
    <div className={`text-center py-8 ${className}`}>
      <Button
        size="lg"
        onClick={onClick}
        className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 text-lg transition-colors rounded-full inline-flex items-center group gap-2"
      >
        <span>{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </div>
  );
};

export default CTAButton;
