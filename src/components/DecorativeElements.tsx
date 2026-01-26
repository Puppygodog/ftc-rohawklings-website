interface DecorativeProps {
  variant?: 'purple' | 'gold' | 'mixed' | 'intense';
  className?: string;
  density?: 'normal' | 'high' | 'extreme';
}

// Structured gradient mesh overlays - replaces random blobs
export const DecorativeBlobs = ({ variant = 'purple', className = '', density = 'normal' }: DecorativeProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variant === 'purple' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
      )}
      {variant === 'gold' && (
        <div className="absolute inset-0 bg-gradient-to-tl from-gold/8 via-transparent to-gold/5" />
      )}
      {variant === 'mixed' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tl from-gold/6 via-transparent to-transparent" />
        </>
      )}
      {variant === 'intense' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/4 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tl from-gold/8 via-gold/3 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />
        </>
      )}
    </div>
  );
};

// Clean geometric accent rings - purposeful placement
export const DecorativeRings = ({ className = '', density = 'normal' }: { className?: string; density?: 'normal' | 'high' | 'extreme' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Strategic corner accent rings */}
      <div className="absolute w-[600px] h-[600px] border border-primary/8 rounded-full -top-[300px] -right-[200px]" />
      <div className="absolute w-[500px] h-[500px] border border-gold/8 rounded-full -bottom-[250px] -left-[150px]" />
      
      {density === 'high' || density === 'extreme' ? (
        <>
          <div className="absolute w-[400px] h-[400px] border border-primary/6 rounded-full top-1/4 -left-[100px]" />
          <div className="absolute w-[350px] h-[350px] border border-gold/6 rounded-full bottom-1/4 -right-[80px]" />
        </>
      ) : null}
    </div>
  );
};

// Structured accent dots - purposeful placement
export const DecorativeCircles = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Strategic corner accents only */}
      <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-primary/30" />
      <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-gold/30" />
      <div className="absolute top-8 left-8 w-1.5 h-1.5 rounded-full bg-primary/25" />
      <div className="absolute bottom-8 right-8 w-1.5 h-1.5 rounded-full bg-gold/25" />
    </div>
  );
};

// Minimal structured dot patterns
export const DecorativeDots = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Clean corner dot accents */}
      <div className="absolute top-12 left-12 flex gap-1.5">
        <div className="w-1 h-1 rounded-full bg-primary/20" />
        <div className="w-1 h-1 rounded-full bg-primary/15" />
      </div>
      <div className="absolute bottom-12 right-12 flex gap-1.5">
        <div className="w-1 h-1 rounded-full bg-gold/20" />
        <div className="w-1 h-1 rounded-full bg-gold/15" />
      </div>
    </div>
  );
};

export const DecorativeAccent = ({ position = 'left' }: { position?: 'left' | 'right' }) => {
  return (
    <div className={`absolute top-0 ${position === 'left' ? 'left-0' : 'right-0'} w-1 h-full`}>
      <div className="w-full h-1/3 bg-gradient-to-b from-primary/40 via-gold/30 to-transparent" />
    </div>
  );
};

export const DecorativeCorners = ({ className = '' }: { className?: string }) => {
  return (
    <>
      {/* Clean corner accents */}
      <div className={`absolute top-0 left-0 w-24 h-24 ${className}`}>
        <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/20 rounded-tl-lg" />
      </div>
      <div className={`absolute top-0 right-0 w-24 h-24 ${className}`}>
        <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gold/20 rounded-tr-lg" />
      </div>
      <div className={`absolute bottom-0 left-0 w-24 h-24 ${className}`}>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-gold/20 rounded-bl-lg" />
      </div>
      <div className={`absolute bottom-0 right-0 w-24 h-24 ${className}`}>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary/20 rounded-br-lg" />
      </div>
    </>
  );
};

export const DecorativeLines = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Minimal strategic accent lines */}
      <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-primary/30 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-gold/25 to-transparent" />
      <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-primary/25 to-transparent" />
    </div>
  );
};
