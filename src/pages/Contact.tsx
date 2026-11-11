import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-5xl font-bold text-navy mb-6">Get in Touch</h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                  Whether you have questions about admissions, want to book a tour, or just want to say hello, we're here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-navy text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-navy/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-1">Our Location</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Accra, Ghana<br />
                      Near Kotoka International Airport<br />
                      Greater Accra Region
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-gold text-navy rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-gold/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-1">Call Us Directly</h4>
                    <p className="text-slate-500 leading-relaxed">+233 24 436 7117</p>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Mon - Fri: 8am - 4pm</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-1">Email Support</h4>
                    <p className="text-slate-500 leading-relaxed">info@hatfieldmontessori.edu.gh</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="https://wa.me/233244367117" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  CHAT ON WHATSAPP
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-100">
              <h3 className="text-3xl font-bold text-navy mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Full Name</label>
                  <input className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                  <input className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Book a Tour</option>
                    <option>School Fees</option>
                    <option>Career Opportunities</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-navy text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                  SEND MESSAGE
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        {/* Simple Styled Map Placeholder since user declined interactive maps */}
        <div className="absolute inset-0 bg-slate-200 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.25301844574!2d-0.2665330368142318!3d5.59050630739958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1714000000000!5m2!1sen!2sgh" 
            className="w-full h-full border-0 grayscale opacity-80" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="bg-navy p-6 rounded-3xl shadow-2xl text-white text-center animate-bounce">
            <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
            <p className="text-sm font-bold uppercase tracking-widest">Hatfield Campus</p>
          </div>
        </div>
      </section>
    </div>
  );
}
