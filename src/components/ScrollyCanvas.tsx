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
<<<<<<< HEAD
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
=======
    const items: HTMLImageElement[] = new Array(frameCount);
    const initialIndex = frameCount - 1;

    // 1. Load the initial frame immediately
    const initialImg = new Image();
    const frameStr = initialIndex.toString().padStart(3, '0');
    initialImg.src = `/sequence/frame_${frameStr}_delay-0.041s.png`;

    initialImg.onload = () => {
      items[initialIndex] = initialImg;
      imagesRef.current = items;

      // Set ready and render initial frame immediately
      setIsReady(true);
      updateRenderConfig();
      renderFrame(initialIndex);

      // 2. Load the remaining frames in the background progressively
      let currentIndex = frameCount - 2; // Load backwards since user scrolls down
      const loadNext = () => {
        if (currentIndex < 0) return;

        const img = new Image();
        const fStr = currentIndex.toString().padStart(3, '0');
        img.src = `/sequence/frame_${fStr}_delay-0.041s.png`;
        img.onload = () => {
          items[currentIndex] = img;
          currentIndex--;
          if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            (window as unknown as { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(() => loadNext());
          } else {
            setTimeout(loadNext, 5);
          }
        };
        img.onerror = () => {
          currentIndex--;
          loadNext();
        };
      };

      // Start background preloading sequence
      loadNext();
    };
>>>>>>> holdMyBeer/chatGPTUpdates
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

<<<<<<< HEAD
  // Map progress to frame index (Reverse mapping as previously requested)
=======
  // Map progress to frame index (Reverse mapping)
>>>>>>> holdMyBeer/chatGPTUpdates
  const frameIndex = useTransform(smoothProgress, [0, 1], [frameCount - 1, 0]);

  const updateRenderConfig = () => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

<<<<<<< HEAD
    const img = imagesRef.current[0];
=======
    // Find the first available image that is loaded
    const img = imagesRef.current.find(image => image !== undefined);
    if (!img) return;

>>>>>>> holdMyBeer/chatGPTUpdates
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
<<<<<<< HEAD
    const img = imagesRef.current[validIndex];
=======
    let img = imagesRef.current[validIndex];

    // Fallback to the closest loaded frame if the targeted frame is still loading
    if (!img) {
      let closestIndex = -1;
      let minDistance = Infinity;
      for (let i = 0; i < frameCount; i++) {
        if (imagesRef.current[i]) {
          const dist = Math.abs(i - validIndex);
          if (dist < minDistance) {
            minDistance = dist;
            closestIndex = i;
          }
        }
      }
      if (closestIndex !== -1) {
        img = imagesRef.current[closestIndex];
      }
    }

>>>>>>> holdMyBeer/chatGPTUpdates
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

