
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    // Create FormData object from the form element
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "9e69ad7f-ba01-4810-948b-73c4e2e115bc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Message sent.");
        // Optional: clear the form visual state if controlled inputs are kept, 
        // but since we are using FormData, we can just reset the form element
        (e.target as HTMLFormElement).reset();
        // Also reset local state if we want to clear the inputs visually via React state
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult("Error! Something went wrong.");
      }
    } catch (error) {
      setResult("Error! Connection failed.");
    }

    // Clear result message after 5 seconds
    setTimeout(() => setResult(""), 5000);
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
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="lakhanladdha48@gmail.com"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
              {result && (
                <p className={`text-center text-sm font-bold ${result.includes("Success") ? "text-green-400" : "text-red-400"}`}>
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
