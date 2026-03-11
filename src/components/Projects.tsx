import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      title: 'Innoventix Hub – Agency Website',
      tech: 'WordPress, Elementor, Custom CSS',
      link: 'https://innoventixhub.com/test',
      image: 'agency.jpg'
    },
    {
      title: 'Ubaid Ur Rehman – Portfolio',
      tech: 'WordPress, Elementor, Custom CSS',
      link: 'https://ur-khan.innoventixhub.com',
      image: 'Ubaid Ur Rehman.png'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-md">A selection of my recent work in WordPress development and custom design.</p>
          </div>
          <div className="h-px flex-grow bg-slate-800 mx-8 hidden md:block"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800 rounded-3xl overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-teal-accent uppercase tracking-widest mb-2 block">{project.tech}</span>
                <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-teal-accent transition-colors"
                >
                  Visit Website <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
