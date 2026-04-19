'use client';
import { memo } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

const Overlay = memo(function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Define unified ranges with clear gaps for all resolutions
  const range1 = [0, 0.25, 0.3];
  const range2 = [0.35, 0.4, 0.55, 0.6];
  const range3 = [0.65, 0.7, 0.9, 1.0];

  // Section 1: 0% scroll
  const opacity1 = useTransform(progress, range1, [1, 1, 0]);
  const y1 = useTransform(
    progress, 
    [0, 0.2, 0.3], 
    [0, 0, -500]
  );

  // Section 2: ~30% scroll
  const opacity2 = useTransform(progress, range2, [0, 1, 1, 0]);
  const y2 = useTransform(progress, range2.slice(0, 3), [50, 0, -50]);

  // Section 3: ~60% scroll
  const opacity3 = useTransform(progress, range3, [0, 1, 1, 0]);
  const y3 = useTransform(progress, range3.slice(0, 3), [50, 0, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center container mx-auto px-6 z-10">
      <motion.div
        style={{ opacity: opacity1, y: y1, willChange: 'transform, opacity' }}
        className="absolute w-full flex justify-center text-center leading-tight mt-[50vh]"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white drop-shadow-2xl">
          Nitin Chandra<br />
          <span className="text-3xl md:text-6xl text-white/60 block mt-2">Senior Software Engineer</span>
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2, willChange: 'transform, opacity' }}
        className="absolute w-full flex justify-center text-center leading-tight mt-[50vh]"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white max-w-2xl drop-shadow-2xl">
          C++, Java, Kotlin, <br></br>
          CMake, Linux, Bash
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3, willChange: 'transform, opacity' }}
        className="absolute w-full flex justify-center text-center leading-tight mt-[50vh]"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white max-w-2xl drop-shadow-2xl">
          Visual Studio, GitLab, <br></br>
          CI/CD, Docker, Agile/SCRUM
        </h2>
      </motion.div>
    </div>
  );
});

export default Overlay;

