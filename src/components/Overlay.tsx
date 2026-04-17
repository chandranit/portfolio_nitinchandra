'use client';
import { motion, MotionValue, useTransform } from 'framer-motion';

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% scroll
  const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.2], [0, -50]);

  // Section 2: ~30% scroll
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.3, 0.5], [50, 0, -50]);

  // Section 3: ~60% scroll
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.6, 0.8], [50, 0, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center container mx-auto px-6 z-10">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute w-full flex justify-center text-center leading-tight mt-[50vh]"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white drop-shadow-2xl">
          Nitin Chandra<br />
          <span className="text-3xl md:text-6xl text-white/60 block mt-2">Senior Software Engineer</span>
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute w-full flex justify-end text-right leading-tight pb-[40vh]"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white max-w-2xl drop-shadow-2xl">
          C++, Java, Kotlin, <br></br>
          CMake, Linux, Bash
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute w-full flex justify-start text-left leading-tight pb-64"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white max-w-2xl drop-shadow-2xl">
          Visual Studio, GitLab, <br></br>
          CI/CD, Docker, Agile/SCRUM
        </h2>
      </motion.div>
    </div>
  );
}
