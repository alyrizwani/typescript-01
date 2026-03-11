import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Ali Raza. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/alyrizwani" className="text-slate-400 hover:text-teal-accent transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/ali-raza-68361b380/" className="text-slate-400 hover:text-teal-accent transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:alyrizwani09i@gmail.com" className="text-slate-400 hover:text-teal-accent transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
