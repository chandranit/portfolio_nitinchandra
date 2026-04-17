'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Mercedes-Benz Research and Development India',
    date: 'Dec 2024 - Dec 2025',
    project: 'Energizing Coach App',
    description: 'Managed change requests via STARC/Jira, and independently led Agile execution as Scrum/Release Manager. Ensured ASPICE compliance. Diagnosed coredump issues. Led "FAST" and "AutoDuck" process automations mapping to testing and Black Duck tool processes.',
    skills: ['C++', 'Python', 'Bash', 'CIVIC Platform', 'CI/CD Pipelines', 'Agile/Scrum', 'Black Duck']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Mercedes-Benz Research and Development India',
    date: 'Aug 2022 - Dec 2024',
    project: 'Vitalsensing App',
    description: 'Ported SSA algorithm to the CIVIC platform yielding 70%+ unit test coverage and 0 Coverity violations. Executed MATLAB code generation. Authored software design and deployed deep learning inference estimations for latency.',
    skills: ['C++', 'MATLAB/Simulink', 'Bash', 'Deep Learning', 'CMake', 'Yocto', 'Coverity']
  }
];

export default function Experience() {
  return (
    <section className="bg-[#121212] py-24 min-h-screen relative z-10 font-sans border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Professional Experience
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
          </motion.div>
        </div>

        <div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-10 md:-left-[55px] top-1 h-5 w-5 rounded-full bg-[#121212] border-2 border-indigo-400" />
              
              <div className="group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                  <span className="text-sm font-medium text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-gray-300 mb-1">{exp.company}</h4>
                <p className="text-sm font-semibold text-indigo-300 mb-6 uppercase tracking-wider">Project: {exp.project}</p>
                
                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
