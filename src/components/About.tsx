'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'Rust', 'Python', 'Kotlin', 'Bash']
  },
  {
    title: 'Embedded & Systems',
    skills: ['Embedded Linux', 'QNX', 'ARM Architecture', 'OTA/FOTA', 'IoT Systems', 'Cross Compilation']
  },
  {
    title: 'Tools & Technologies',
    skills: ['CMake', 'Make', 'GDB', 'Git', 'GitLab', 'Jenkins', 'Docker', 'VMware', 'QEMU', 'Jira', 'Confluence', 'JFrog']
  },
  {
    title: 'Testing & Quality',
    skills: ['GTest', 'Coverity', 'Black Duck', 'Regression Testing', 'Delta Testing', 'CI/CD']
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['OpenCV', 'FFT Libraries', 'JSON Handling']
  },
  {
    title: 'Concepts',
    skills: ['OOP', 'Signal Processing', 'MVVM Architecture', 'Agile/Scrum', 'Release Management', 'Defect Management']
  }
];

export default function About() {
  return (
    <section className="bg-[#121212] py-24 relative z-10 font-sans border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Professional Summary - Left 5 columns */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              About Me
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500" />
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500" />
              
              <p className="text-gray-300 text-lg leading-relaxed font-normal">
                Embedded Software Engineer with <strong className="text-indigo-400 font-semibold">~4 years of experience</strong> in Automotive, Embedded Linux/QNX, IoT, and C++ development.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mt-4">
                Experienced in system integration, OTA/FOTA workflows, embedded application development, release management, defect triaging, and real-time synchronization systems.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mt-4">
                Skilled in C++, Rust, Linux, CI/CD pipelines, cross-compilation, signal processing, and automotive wellness applications with a strong background in technical presentations and Agile collaboration.
              </p>
            </div>
          </motion.div>

          {/* Technical Skills - Right 7 columns */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Technical Skills
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-indigo-500/30 hover:-translate-y-0.5 group"
                >
                  <h3 className="text-base font-bold text-indigo-300 mb-3 tracking-wide uppercase group-hover:text-indigo-400 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-gray-300 bg-white/5 border border-white/5 px-2 py-1 rounded transition-colors group-hover:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
