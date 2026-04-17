'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Energizing Coach App',
    category: 'Release & Test Management',
    image: '/projects/project1.png'
  },
  {
    title: 'Vitalsensing App',
    category: 'Algorithm Porting & Deep Learning',
    image: '/projects/project2.png'
  },
  {
    title: 'FAST & AutoDuck',
    category: 'Automation & CI/CD Tooling',
    image: '/projects/project3.png'
  }
];

export default function Projects() {
  return (
    <section className="bg-[#121212] py-32 min-h-screen relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Selected Work
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:bg-white/10 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent flex flex-col justify-end p-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
