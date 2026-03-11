import { Code, Palette, Wrench } from 'lucide-react';

export default function Skills() {
  const skills = {
    development: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Python'],
    design: ['Figma', 'Canva', 'Adobe Illustrator', 'Adobe Photoshop'],
    tools: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint']
  };

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-deep-blue mb-4">Core Expertise</h2>
          <p className="text-slate-500">A versatile toolkit for modern web development and design.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card group">
            <div className="w-12 h-12 bg-teal-accent/10 text-teal-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-accent group-hover:text-white transition-all">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.development.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card group">
            <div className="w-12 h-12 bg-teal-accent/10 text-teal-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-accent group-hover:text-white transition-all">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Graphic Design</h3>
            <div className="flex flex-wrap gap-2">
              {skills.design.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card group">
            <div className="w-12 h-12 bg-teal-accent/10 text-teal-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-accent group-hover:text-white transition-all">
              <Wrench size={24} />
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Office Suite</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
