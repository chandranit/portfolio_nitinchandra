'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import Overlay from './Overlay';

const frameCount = 192;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);
  const renderConfig = useRef({ offsetX: 0, offsetY: 0, drawWidth: 0, drawHeight: 0 });

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const items: HTMLImageElement[] = [];
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const frameStr = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${frameStr}_delay-0.041s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsReady(true);
          // Initial render
          updateRenderConfig();
          renderFrame(frameCount - 1); // Start at the "reverse" start
        }
      };
      items.push(img);
    }
    imagesRef.current = items;
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Add Momentum/Smoothness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to frame index (Reverse mapping as previously requested)
  const frameIndex = useTransform(smoothProgress, [0, 1], [frameCount - 1, 0]);

  const updateRenderConfig = () => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;
    
    const img = imagesRef.current[0];
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    } else {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    renderConfig.current = { offsetX, offsetY, drawWidth, drawHeight };
  };

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    if (!contextRef.current) {
      contextRef.current = canvas.getContext('2d', { alpha: false });
    }
    const ctx = contextRef.current;
    if (!ctx) return;

    const validIndex = Math.max(0, Math.min(Math.floor(index), frameCount - 1));
    const img = imagesRef.current[validIndex];
    if (!img) return;

    const { offsetX, offsetY, drawWidth, drawHeight } = renderConfig.current;

    ctx.globalAlpha = 0.6;
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.globalAlpha = 1.0;
  };

  useEffect(() => {
    if (!isReady) return;
    return frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => renderFrame(latest));
    });
  }, [isReady, frameIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        updateRenderConfig();
        renderFrame(frameIndex.get());
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isReady, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        />
        <Overlay progress={smoothProgress} />
      </div>
    </div>
  );
}

