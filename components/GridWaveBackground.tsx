export function GridBackground({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none -z-20" />
      
      {/* Delicate Flowing Vector Wave Lines (like screenshot) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-60 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        fill="none"
      >
        {/* Soft gradient blur at top corner */}
        <defs>
          <linearGradient id="sageGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#bbf7d0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#64748b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Soft rounded sage area in upper area (like screenshot) */}
        <path
          d="M0,0 L600,0 C650,0 700,50 700,100 L700,180 C700,240 640,280 580,280 L0,280 Z"
          fill="url(#sageGlow)"
        />

        {/* Flowing Spirograph / Guilloche Wave Lines */}
        <g stroke="url(#waveStroke)" strokeWidth="0.8" fill="none">
          <path d="M-100,500 C300,550 500,200 900,350 C1200,450 1350,250 1600,300" />
          <path d="M-100,520 C300,560 510,220 910,360 C1210,455 1360,260 1600,310" />
          <path d="M-100,540 C300,570 520,240 920,370 C1220,460 1370,270 1600,320" />
          <path d="M-100,560 C300,580 530,260 930,380 C1230,465 1380,280 1600,330" />
          <path d="M-100,580 C300,590 540,280 940,390 C1240,470 1390,290 1600,340" />
          <path d="M-100,600 C300,600 550,300 950,400 C1250,475 1400,300 1600,350" />
          <path d="M-100,620 C300,610 560,320 960,410 C1260,480 1410,310 1600,360" />
          <path d="M-100,640 C300,620 570,340 970,420 C1270,485 1420,320 1600,370" />
          <path d="M-100,660 C300,630 580,360 980,430 C1280,490 1430,330 1600,380" />
          <path d="M-100,680 C300,640 590,380 990,440 C1290,495 1440,340 1600,390" />
          <path d="M-100,700 C300,650 600,400 1000,450 C1300,500 1450,350 1600,400" />
          <path d="M-100,720 C300,660 610,420 1010,460 C1310,505 1460,360 1600,410" />
        </g>
      </svg>

      {children}
    </div>
  );
}

export function WaveSectionDivider({ fill = "#FFFFFF", flip = false }: { fill?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-8 sm:h-12 md:h-16"
        preserveAspectRatio="none"
      >
        <path
          d="M0,45 C320,90 480,10 800,50 C1120,90 1280,20 1440,45 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
