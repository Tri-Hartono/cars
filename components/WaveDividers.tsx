export function WaveTop({ className = "", fill = "#FAFAF8" }: { className?: string; fill?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-12 sm:h-16 md:h-24 preserve-3d"
      >
        <path
          d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function WaveBottom({ className = "", fill = "#FFFFFF" }: { className?: string; fill?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-12 sm:h-16 md:h-24 preserve-3d"
      >
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function MultiLayerWave({ className = "", fill = "#16A34A" }: { className?: string; fill?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-16 sm:h-20 md:h-28"
      >
        <path
          opacity="0.25"
          d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,58.7C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,140L1380,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"
          fill={fill}
        />
        <path
          opacity="0.45"
          d="M0,96L60,90.7C120,85,240,75,360,80C480,85,600,107,720,101.3C840,96,960,64,1080,58.7C1200,53,1320,75,1380,85.3L1440,96L1440,140L1380,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"
          fill={fill}
        />
        <path
          d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,140L1380,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function CurvedDivider({ fill = "#FFFFFF" }: { fill?: string }) {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-10 sm:h-14 md:h-20"
      >
        <path
          d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
