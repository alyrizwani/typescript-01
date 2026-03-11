export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">About Me</h2>
            <div className="w-12 h-1 bg-teal-accent"></div>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl text-slate-700 leading-relaxed italic mb-8">
              "Passionate about learning and contributing to impactful projects where I can apply my problem-solving, creativity, and analytical skills."
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              My goal is to grow both personally and professionally by taking on challenging opportunities, collaborating with diverse teams, and creating meaningful solutions that add value to organizations and the people they serve.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Location</h4>
                <p className="font-medium text-deep-blue">Dhoke Kala Khan, Rawalpindi</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Email</h4>
                <p className="font-medium text-deep-blue">alyrizwani09i@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
