import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-navy mb-6 tracking-tight">Our Story</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded with a passion for holistic education, Hatfield Montessori School has grown from a vision into one of Accra's most respected educational institutions.
          </p>
        </div>
      </section>

      {/* History & Motto */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-gold font-bold tracking-widest uppercase text-xs">
                <div className="h-px w-12 bg-gold"></div>
                Our Heritage
              </div>
              <h2 className="text-4xl font-bold text-navy leading-tight">
                A Legacy of Excellence in Montessori Education
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                At Hatfield, we believe that education is not merely the filling of a bucket, but the lighting of a fire. Since our inception, we have been dedicated to providing a nurturing environment where children can discover their passions and develop the skills they need for a changing world.
              </p>
              <div className="p-8 bg-gold/5 border-l-4 border-gold rounded-r-2xl">
                <h3 className="text-xl font-bold text-navy mb-2 italic">"ACTIVE MINDS & HAPPY HEARTS"</h3>
                <p className="text-slate-500 text-sm italic">Our guiding motto that defines every interaction and lesson at Hatfield Montessori.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
              <img 
                src="/src/assets/images/hero_students_smiling_1794424033640.jpg" 
                alt="Students in a group activity" 
                className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-navy text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-12 rounded-[3rem] border border-white/10 space-y-6"
          >
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              To inspire a lifelong love of learning and character development in children through a specialized Montessori curriculum that integrates technology, creativity, and practical life skills.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-12 rounded-[3rem] border border-white/10 space-y-6"
          >
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed">
              To be the premier educational beacon in Ghana, nurturing future leaders who are academically brilliant, emotionally resilient, and technologically proficient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-navy">Our Core Philosophy</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Holistic Growth',
                desc: 'We focus on the physical, emotional, social, and cognitive development of each child.',
                icon: Heart
              },
              {
                title: 'Character Education',
                desc: 'Values such as respect, integrity, and empathy are central to our daily routine.',
                icon: ShieldCheck
              },
              {
                title: 'Tech-Forward',
                desc: 'Preparing students for the 21st century by integrating coding and digital literacy early.',
                icon: Target
              }
            ].map((p, i) => (
              <div key={i} className="text-center space-y-4 px-8">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <p.icon className="w-10 h-10 text-navy" />
                </div>
                <h4 className="text-2xl font-bold text-navy">{p.title}</h4>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
