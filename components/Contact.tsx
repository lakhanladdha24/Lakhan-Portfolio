
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For a real production app, you'd use a service like Formspree, EmailJS, or a custom backend.
    // For now, we simulate the success and provide a mailto fallback for the user.
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:lakhanladdha48@gmail.com?subject=${subject}&body=${body}`;
    
    alert(`Thank you ${formData.name}! Your email client should now open with your message.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <br /><span className="text-cyan-400">intelligent</span> together.</h2>
            <p className="text-slate-400 text-lg mb-12">
              Have a project in mind or just want to chat about AI? Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: <Mail className="text-cyan-400" />, 
                  label: "Email", 
                  value: "lakhanladdha48@gmail.com",
                  href: "mailto:lakhanladdha48@gmail.com"
                },
                { 
                  icon: <MapPin className="text-blue-400" />, 
                  label: "Location", 
                  value: "India, Vadodara",
                  href: "https://www.google.com/maps/search/?api=1&query=Vadodara,India"
                },
                { 
                  icon: <Phone className="text-violet-400" />, 
                  label: "Phone", 
                  value: "+91 94615 38243",
                  href: "tel:+919461538243"
                }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 group w-fit"
                >
                  <div className="p-4 glass-panel rounded-2xl group-hover:scale-110 group-hover:border-cyan-400/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-0.5">{item.label}</div>
                    <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-white/5 flex gap-6">
              {[
                { icon: Github, href: "https://github.com/lakhanladdha24" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/lakhan-laddha-60593b304/" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass-panel rounded-full text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="lakhanladdha48@gmail.com"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
