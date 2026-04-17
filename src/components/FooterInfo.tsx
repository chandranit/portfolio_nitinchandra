'use client';
import { motion } from 'framer-motion';

export default function FooterInfo() {
  return (
    <footer className="bg-[#121212] py-20 px-6 lg:px-12 border-t border-white/10 relative z-10 font-sans">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Education</h3>
            <div className="space-y-6">
              <div className="group border-l-2 border-indigo-500/30 pl-5 transition-all hover:border-indigo-400">
                <h4 className="text-lg font-semibold text-white">National Institute of Technology (NIT) Trichy</h4>
                <p className="text-sm font-semibold text-indigo-400 mt-1 uppercase tracking-wider">2022</p>
                <p className="text-sm text-gray-400 mt-2 font-medium">ME/M.Tech</p>
              </div>
              <div className="group border-l-2 border-indigo-500/30 pl-5 transition-all hover:border-indigo-400">
                <h4 className="text-lg font-semibold text-white">Dr. APJ Abdul Kalam Technical University</h4>
                <p className="text-sm font-semibold text-indigo-400 mt-1 uppercase tracking-wider">BE/B.Tech/Bs</p>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Contact</h3>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xl transition-colors hover:bg-white/10">
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:chandra.nitin333@gmail.com" className="text-lg font-medium text-gray-200 hover:text-white transition-colors">
                  chandra.nitin333@gmail.com
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xl transition-colors hover:bg-white/10">
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Based In</p>
                <p className="text-lg font-medium text-gray-200">Bangalore <span className="text-gray-600 mx-2">|</span> +91-6363252498</p>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://linkedin.com/in/nitinchandra" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
                  LinkedIn Profile
                </a>
                <a href="#" className="px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold rounded-xl transition-colors border border-white/10">
                  Scaler Profile
                </a>
              </div>
            </div>
          </motion.div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Nitin Chandra. All rights reserved.</p>
          <p className="mt-2 md:mt-0 uppercase tracking-widest text-xs">Senior Software Engineer @ Mercedes-Benz R&D India</p>
        </div>
      </div>
    </footer>
  );
}
