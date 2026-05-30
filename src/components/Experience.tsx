'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Software Developer',
    company: 'Mercedes-Benz Research and Development India',
    date: 'April 2026 - Present',
    project: 'OLU (Onboard Logic Unit)',
    description: [
      'Working on IoT-based onboard device responsible for OTA/FOTA software updates and charging management systems for commercial EV fleets.',
      'Contributing to firmware and middleware layers developed in C++ and Java.',
      'Developing GUI-based flashing utility to simplify NAD Flashing and Corus Flashing and custsw flashing workflows for non-technical users.',
      'Integrating secure unlocking and flashing workflows using cloud-based secret-key retrieval mechanisms.',
      'Working on PKI certificate rotation automation for secure device communication and self-signed certificate renewal.',
      'Supporting middleware integration and system-level flashing validation workflows.'
    ],
    skills: ['C++', 'Java', 'IoT', 'OTA/FOTA', 'Firmware', 'PKI', 'NAD Flashing', 'Corus Flashing', 'custsw flashing', 'Security']
  },
  {
    title: 'Android Developer',
    company: 'Mercedes-Benz Research and Development India',
    date: 'Jan 2026 - March 2026',
    project: 'Energizing Comfort (Android Platform)',
    description: [
      'Took 30 days External Training provided by Mercedes-Benz.',
      'Contributed to initial Android platform setup for automotive wellness application.',
      'Worked with MVVM architecture and Kotlin-based Android development workflows.',
      'Configured Gradle-based development environments and custom emulator setups.',
      'Participated in internal Android training and conducted KT sessions for teammates.'
    ],
    skills: ['Kotlin', 'Android', 'MVVM', 'Gradle', 'Emulator Setup']
  },
  {
    title: 'Software Engineer | Defect Manager | Release Manager | SCRUM Master',
    company: 'Mercedes-Benz Research and Development India',
    date: 'Jan 2025 - Dec 2025',
    project: 'Energizing Coach Application (Linux Platform)',
    description: [
      'Worked on onboard automotive wellness application responsible for driver refreshment and fatigue-reduction experiences.',
      'Handled production defect triaging, debugging, and resolution for critical VOCA1/VOCA2/VOCA3 tickets under strict deadlines.',
      'Managed release activities including pre-release audits, compliance verification, MR reviews, and post-release validation.',
      'Coordinated with QA, developers, and stakeholders to ensure stable production releases.',
      'Identified and escalated FOSS compliance risks using Black Duck analysis and presented mitigation strategies in technical forums.',
      'Contributed to Agile execution as Scrum Master by facilitating sprint planning, retrospectives, stand-ups, and blocker resolution.',
      'Developed automation initiatives including FAST (Flashing Automation of Software Testing) and AutoDuck (FOSS automation workflow).',
      'Conducted multiple knowledge-sharing sessions on OOP concepts, Agile workflows, and embedded software lifecycle.'
    ],
    skills: ['C++', 'Linux', 'Release Management', 'Defect Triaging', 'Black Duck', 'Scrum Master', 'FAST', 'AutoDuck', 'Agile']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Mercedes-Benz Research and Development India',
    date: 'Aug 2022 - Dec 2024',
    project: 'VitalSensing Application',
    description: [
      'Worked on camera-based RPPG (Remote Photoplethysmography) solution for heart-rate and respiration sensing using IR camera streams in automotive environments.',
      'Ported Python-based signal-processing algorithms to embedded C++ platform running on CIVIC ECU.',
      'Designed timestamp-based synchronization logic between image frames and IR metadata streams for accurate ROI extraction and heart-rate estimation.',
      'Implemented Butterworth, Bandpass, Kalman filtering, FFT integration, and signal post-processing functionalities.',
      'Integrated MPIC IR services, MCM interfaces, image-processing modules, and VitalAlgo libraries into the application stack.',
      'Performed cross-compilation using ARM toolchains and worked extensively with CMake/Make build systems.',
      'Developed unit tests using GTest and maintained 70%+ test coverage with zero Coverity violations.',
      'Conducted GPU/CPU runtime analysis and evaluated MATLAB-to-C++ code generation strategies for performance optimization.',
      'Migrated application components to QNX Safe OS.',
      'Presented architecture and algorithm flow during company-wide technical events and received strong appreciation for communication and technical clarity.'
    ],
    skills: ['C++', 'Python', 'CMake', 'Embedded Linux', 'QNX', 'RPPG', 'Signal Processing', 'GTest', 'Coverity', 'ARM']
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

                <div className="text-base text-gray-400 leading-relaxed mb-6">
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>

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
