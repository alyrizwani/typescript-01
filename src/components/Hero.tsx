import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-100/50 skew-x-12 translate-x-1/4"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-teal-accent/10 text-teal-accent rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            Available for Hire
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-deep-blue leading-tight mb-6">
            WordPress Developer & <br />
            <span className="text-teal-accent">Graphic</span> Designer
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Crafting high-performance websites and intuitive digital experiences with a focus on modern design and clean code.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="px-8 py-3 rounded-full font-medium text-deep-blue border border-slate-200 hover:bg-slate-50 transition-all">Contact Me</a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="self.jpeg" 
              alt="Ali Raza" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-accent rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-slate-200 rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
