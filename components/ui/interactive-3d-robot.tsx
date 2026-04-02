'use client';

import { useState } from 'react';

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

// Converts a Spline .splinecode URL to the hosted viewer URL.
// e.g. https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode
//   → https://my.spline.design/PyzDhpQ9E5f1E3MT/
function toViewerUrl(scene: string): string {
  const match = scene.match(/spline\.design\/([^/]+)\//);
  if (match) return `https://my.spline.design/${match[1]}/`;
  return scene;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const [loaded, setLoaded] = useState(false);
  const viewerUrl = toViewerUrl(scene);

  return (
    <div className={`relative ${className ?? ''}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <svg className="animate-spin h-8 w-8 text-white/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z" />
          </svg>
        </div>
      )}
      <iframe
        src={viewerUrl}
        className="w-full h-full border-0"
        style={{ background: 'transparent' }}
        allow="autoplay"
        onLoad={() => setLoaded(true)}
        title="NEO Robot 3D"
      />
    </div>
  );
}
