import { Wheat } from "lucide-react";

const BrotLogo = ({ 
  className = "h-12 w-auto", 
  isScrolled = false 
}: { 
  className?: string;
  isScrolled?: boolean;
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <Wheat className="h-6 w-6 text-brot-gold rotate-45" />
        <div className="flex flex-col items-center">
          <span className={`text-3xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-brot-brown-dark' : 'text-white'
          }`}>
            BROT
          </span>
        </div>
        <Wheat className="h-6 w-6 text-brot-gold -rotate-45" />
      </div>
    </div>
  );
};

export default BrotLogo;