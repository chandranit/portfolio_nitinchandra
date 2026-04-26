'use client';
import { memo } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

const skills = [
  "C++", "Python", "CMake", "Bash", "Java", "Kotlin",
  "Visual Studio", "GitLab", "CI/CD", "Docker", "Agile/SCRUM"
];

const SkillText = memo(function SkillText({ text, index, progress, total }: { text: string, index: number, progress: MotionValue<number>, total: number }) {
  const start = 0.25 + (index * (0.7 / total));
  const peak1 = start + 0.015;
  const peak2 = start + (0.7 / total) - 0.015;
  const end = start + (0.7 / total);

  const opacity = useTransform(progress, [start, peak1, peak2, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, peak1, peak2, end], [50, 0, 0, -50]);

  return (
    <motion.div
      style={{ opacity, y, willChange: 'transform, opacity' }}
      className="absolute w-full flex justify-center text-center leading-tight mt-[50vh]"
    >
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-2xl">
        {text}
      </h2>
    </motion.div>
  );
});

const Overlay = memo(function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% scroll
  const range1 = [0, 0.15, 0.2];
  const opacity1 = useTransform(progress, range1, [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.1, 0.2], [0, 0, -500]);

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

      {skills.map((skill, index) => (
        <SkillText key={skill} text={skill} index={index} progress={progress} total={skills.length} />
      ))}
    </div>
  );
});

export default Overlay;

