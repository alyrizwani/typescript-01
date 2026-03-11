import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setMessage("Message received! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Let's Connect</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 text-teal-accent rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</h4>
                  <a href="mailto:alyrizwani09i@gmail.com" className="text-deep-blue font-medium hover:text-teal-accent transition-colors">alyrizwani09i@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 text-teal-accent rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</h4>
                  <a href="tel:+923425615728" className="text-deep-blue font-medium hover:text-teal-accent transition-colors">+92 342 5615728</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 text-teal-accent rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Address</h4>
                  <p className="text-deep-blue font-medium">Dhoke Kala Khan, Rawalpindi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-teal-accent/10 text-teal-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChevronRight size={32} />
                </div>
                <h3 className="text-2xl font-bold text-deep-blue mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-8">{message}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-teal-accent font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition-all" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition-all" 
                      placeholder="your@email.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition-all" 
                    placeholder="Project Inquiry" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition-all resize-none" 
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">{message}</p>
                )}
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
