'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Overlay from './Overlay';

const frameCount = 75;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload Images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      // Format number to 2 digits. The sequence starts at 00.
      const frameStr = i.toString().padStart(2, '0');
      img.src = `/sequence/frame_${frameStr}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          // Trigger first render immediately once all loaded
          if (canvasRef.current && loadedImages[0]) {
            renderFrame(0, loadedImages);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (images.length === 0) return;
    
    // Subscribe to framer motion changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      const currentFrameIndex = Math.floor(latest);
      requestAnimationFrame(() => renderFrame(currentFrameIndex, images));
    });
    return () => unsubscribe();
  }, [frameIndex, images]);

  const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Safety fallback
    const validIndex = Math.max(0, Math.min(index, frameCount - 1));
    const img = imgs[validIndex];
    if (!img) return;

    // Object-fit: cover logic
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

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Darken images slightly for better text contrast if we wanted to, 
    // but the global background is already #121212. We can draw the image natively.
    ctx.globalAlpha = 0.6; // dims image so text pops perfectly
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.globalAlpha = 1.0;
  };

  useEffect(() => {
    // Handle resizing
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // re-render current frame after resize
        if (images.length > 0) {
          renderFrame(Math.floor(frameIndex.get()), images);
        }
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
