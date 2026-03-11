import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experience = [
    {
      company: 'Innoventix Hub',
      role: 'WordPress Developer Intern',
      duration: "July '25 – Sept '25",
      type: 'Onsite',
      description: 'Worked on agency-level WordPress projects using Elementor and custom CSS.'
    },
    {
      company: 'Intern Intelligence',
      role: 'Frontend Developer Intern',
      duration: "March 10, '25 – April 10, '25",
      type: 'Remote',
      description: 'Focused on building responsive frontend components and layouts.'
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: 'NUML Islamabad',
      period: '2023 – Expected 2027'
    },
    {
      degree: 'Intermediate (ICS)',
      institution: 'Degree College Skardu',
      period: '2021 – 2023'
    },
    {
      degree: 'Matriculation (Science)',
      institution: 'High School Newranga Skardu',
      period: '2019 – 2021'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 bg-deep-blue text-white rounded-full flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <h2 className="text-3xl font-bold text-deep-blue">Experience</h2>
            </div>
            <div className="space-y-10">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-teal-accent border-4 border-white"></div>
                  <span className="text-sm font-bold text-teal-accent uppercase tracking-wider">{exp.duration}</span>
                  <h3 className="text-xl font-bold text-deep-blue mt-1">{exp.role}</h3>
                  <p className="text-slate-500 font-medium mb-3">{exp.company} • {exp.type}</p>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 bg-deep-blue text-white rounded-full flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-3xl font-bold text-deep-blue">Education</h2>
            </div>
            <div className="space-y-10">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{edu.period}</span>
                  <h3 className="text-xl font-bold text-deep-blue mt-1">{edu.degree}</h3>
                  <p className="text-slate-600">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
