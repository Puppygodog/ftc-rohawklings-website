// Hand-drawn style robot sketches - fun, sketchy, not AI-generated
export const RobotSketch1 = ({ className = '' }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sketchy robot body */}
      <rect x="60" y="80" width="80" height="100" rx="8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      {/* Head */}
      <rect x="75" y="50" width="50" height="40" rx="6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4"/>
      {/* Eyes */}
      <circle cx="90" cy="68" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="110" cy="68" r="4" fill="currentColor" opacity="0.5"/>
      {/* Antenna */}
      <line x1="100" y1="50" x2="100" y2="35" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
      <circle cx="100" cy="32" r="3" fill="currentColor" opacity="0.5"/>
      {/* Arms */}
      <rect x="30" y="100" width="30" height="15" rx="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <rect x="140" y="100" width="30" height="15" rx="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      {/* Legs */}
      <rect x="70" y="180" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <rect x="110" y="180" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      {/* Decorative sketch lines */}
      <path d="M65 85 Q70 90 75 85" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2"/>
      <path d="M125 85 Q130 90 135 85" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2"/>
    </svg>
  );
};

export const RobotSketch2 = ({ className = '' }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tank-style robot */}
      <ellipse cx="90" cy="120" rx="60" ry="40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.4"/>
      {/* Top section */}
      <rect x="70" y="60" width="40" height="50" rx="5" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.4"/>
      {/* Turret */}
      <line x1="90" y1="60" x2="90" y2="45" stroke="currentColor" strokeWidth="3" opacity="0.4"/>
      <circle cx="90" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
      {/* Wheels */}
      <circle cx="50" cy="130" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <circle cx="130" cy="130" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      {/* Details */}
      <rect x="75" y="75" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
      <path d="M85 100 L95 100 M85 105 L95 105" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
};

export const RobotSketch3 = ({ className = '' }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Humanoid robot */}
      {/* Head */}
      <circle cx="80" cy="40" r="25" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.4"/>
      {/* Body */}
      <rect x="55" y="70" width="50" height="70" rx="6" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.4"/>
      {/* Arms */}
      <line x1="55" y1="90" x2="30" y2="110" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
      <circle cx="30" cy="110" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <line x1="105" y1="90" x2="130" y2="110" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
      <circle cx="130" cy="110" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      {/* Legs */}
      <line x1="70" y1="140" x2="60" y2="180" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
      <circle cx="60" cy="180" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <line x1="90" y1="140" x2="100" y2="180" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
      <circle cx="100" cy="180" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      {/* Face details */}
      <circle cx="72" cy="38" r="3" fill="currentColor" opacity="0.5"/>
      <circle cx="88" cy="38" r="3" fill="currentColor" opacity="0.5"/>
      <path d="M72 48 Q80 52 88 48" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
      {/* Chest panel */}
      <rect x="65" y="85" width="30" height="25" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
      <path d="M70 95 L90 95 M70 100 L90 100" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
};

export const RobotSketch4 = ({ className = '' }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Compact robot */}
      <rect x="50" y="50" width="100" height="80" rx="10" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.4"/>
      {/* Top sensor */}
      <rect x="80" y="30" width="40" height="25" rx="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
      {/* Claw arm */}
      <path d="M50 80 L25 100 M25 100 L20 95 M25 100 L20 105" stroke="currentColor" strokeWidth="2.5" opacity="0.3"/>
      {/* Wheels */}
      <circle cx="70" cy="130" r="15" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.3"/>
      <circle cx="130" cy="130" r="15" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.3"/>
      {/* Details */}
      <circle cx="75" cy="70" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="125" cy="70" r="5" fill="currentColor" opacity="0.4"/>
      <rect x="85" y="90" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
    </svg>
  );
};

// Container component to scatter robot sketches
export const RobotSketches = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-[10%] right-[8%] w-32 h-32 text-primary/15">
        <RobotSketch1 />
      </div>
      <div className="absolute bottom-[15%] left-[5%] w-28 h-28 text-gold/15">
        <RobotSketch2 />
      </div>
      <div className="absolute top-[60%] right-[12%] w-24 h-30 text-primary/12">
        <RobotSketch3 />
      </div>
      <div className="absolute bottom-[25%] right-[20%] w-36 h-27 text-gold/12">
        <RobotSketch4 />
      </div>
      <div className="absolute top-[35%] left-[10%] w-20 h-25 text-primary/10">
        <RobotSketch1 />
      </div>
    </div>
  );
};

