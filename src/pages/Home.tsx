import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Cpu, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Academic Excellence', value: '100%', sub: 'Pass Rate' },
  { label: 'Student Growth', value: '500+', sub: 'Enrolled' },
  { label: 'Technology Ratio', value: '1:1', sub: 'Device Access' },
  { label: 'Teacher Support', value: '12:1', sub: 'Student Ratio' },
];

const values = [
  {
    title: 'Character First',
    desc: 'We believe that strong character is the foundation of all future success.',
    icon: Shield,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Tech Integrated',
    desc: 'Modern tools and coding are woven into the fabric of our curriculum.',
    icon: Cpu,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    title: 'Happy Hearts',
    desc: 'A nurturing environment where every child feels loved and valued.',
    icon: Heart,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

const testimonials = [
  {
    text: "The progress my child has made in both academics and confidence is truly remarkable. Hatfield is more than just a school; it's a family.",
    author: "Mrs. Ama Osei",
    role: "Parent of Grade 4 Student",
  },
  {
    text: "The integration of technology and coding at such an early age has given my son a clear advantage for the future.",
    author: "Mr. Kwesi Appiah",
    role: "Tech Entrepreneur & Parent",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/aistudio/Hatfield_WhatsApp_Image_4bffff93.jpeg" 
            alt="Hatfield Montessori 10th Anniversary" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-bold tracking-wider mb-6 border border-gold/30">
              A TRUSTED SCHOOL FOR ACADEMIC EXCELLENCE
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Active Minds & <br />
              <span className="text-gold">Happy Hearts</span>
            </h1>
            <p className="text-lg text-slate-200 mb-10 max-w-lg leading-relaxed">
              Experience a premium Montessori education in Accra that prepares your child for the future with character, technology, and creativity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/admissions" 
                className="px-8 py-4 bg-gold text-navy font-bold rounded-xl hover:bg-amber-500 transition-all flex items-center gap-2 group shadow-xl shadow-gold/20"
              >
                APPLY NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/gallery" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
              >
                VIRTUAL TOUR
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-gold tracking-[0.3em] uppercase mb-4">Our DNA</h2>
            <h3 className="text-4xl font-bold text-navy mb-6">Why Choose Hatfield?</h3>
            <p className="text-slate-600">We go beyond traditional teaching to foster curiosity and emotional intelligence in every student.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", value.bg)}>
                  <value.icon className={cn("w-8 h-8", value.color)} />
                </div>
                <h4 className="text-2xl font-bold text-navy mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/src/assets/images/ghanaian_nursery_students_1794424393318.jpg" 
                alt="Modern classroom environment with Ghanaian students" 
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl font-bold text-navy mb-8 leading-tight">
                Academic Excellence Rooted in Character
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our curriculum is meticulously designed to challenge students intellectually while nurturing their emotional and social well-being.
              </p>
              <ul className="space-y-6">
                {[
                  "Personalized Montessori Learning Paths",
                  "STEM-Focused Extracurricular Programs",
                  "Strong Emphasis on Creative Arts & Music",
                  "Global Citizenship & Character Education",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-navy font-semibold">
                    <div className="bg-gold/20 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <Link to="/about" className="text-navy font-bold flex items-center gap-2 group">
                  LEARN MORE ABOUT OUR MISSION
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform origin-top"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-white">Voice of Our Parents</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
                <div className="text-gold mb-6 italic text-lg leading-relaxed">
                  "{t.text}"
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t.author}</div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gold rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl lg:text-5xl font-bold text-navy mb-8">Ready to join the Hatfield family?</h3>
              <p className="text-lg text-navy/80 mb-10">Limited spaces available for the upcoming session. Book your tour today and see our campus in action.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-10 py-5 bg-navy text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-navy/20">
                  BOOK A SCHOOL TOUR
                </Link>
                <Link to="/admissions" className="px-10 py-5 bg-white text-navy font-bold rounded-2xl hover:bg-slate-50 transition-all">
                  ONLINE ENQUIRY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
