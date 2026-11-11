import { motion } from 'motion/react';
import { BookOpen, Monitor, FlaskConical, Palette } from 'lucide-react';

const programs = [
  {
    id: 'early-years',
    title: 'Early Years / Nursery',
    age: 'Age 1 - 3 Years',
    desc: 'A nurturing introduction to the Montessori method, focusing on sensory development, practical life skills, and linguistic foundations.',
    image: '/src/assets/images/nursery_classroom_modern_1794424033722.jpg',
    features: ['Sensory Exploration', 'Social Integration', 'Language Development', 'Motor Skills'],
    color: 'bg-rose-50 border-rose-100 text-rose-700',
    icon: Heart
  },
  {
    id: 'primary',
    title: 'Primary Education',
    age: 'Age 4 - 11 Years',
    desc: 'Building solid academic foundations in literacy, numeracy, and science, while fostering critical thinking and collaborative problem-solving.',
    image: '/src/assets/images/hero_students_smiling_1794424033640.jpg',
    features: ['Core Academics', 'Critical Thinking', 'Coding & Robotics', 'Creative Writing'],
    color: 'bg-blue-50 border-blue-100 text-blue-700',
    icon: BookOpen
  },
  {
    id: 'secondary',
    title: 'Secondary Education',
    age: 'Age 12 - 16 Years',
    desc: 'Preparing students for higher education with a rigorous curriculum, specialized science labs, and leadership development programs.',
    image: '/src/assets/images/science_lab_modern_1794424048731.jpg',
    features: ['Specialized Sciences', 'Leadership Lab', 'Global Perspectives', 'Exam Readiness'],
    color: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    icon: FlaskConical
  }
];

export default function Academics() {
  return (
    <div className="pt-20">
      <section className="bg-navy py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-12 transform origin-top"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-8">Academic Pathways</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We offer a progressive learning journey that evolves with your child, ensuring they are always challenged, supported, and inspired.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 space-y-32">
          {programs.map((program, i) => (
            <motion.div 
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              id={program.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}>
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${program.color} text-xs font-bold uppercase tracking-wider mb-8`}>
                  <span>{program.age}</span>
                </div>
                <h2 className="text-4xl font-bold text-navy mb-6">{program.title}</h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  {program.desc}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold"></div>
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={i % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-navy/5 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="relative z-10 rounded-[2.5rem] shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities Spotlight */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h3 className="text-3xl font-bold text-navy mb-4">Beyond the Classroom</h3>
            <p className="text-slate-600">Our campus is designed to support diverse interests, from technology to the performing arts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/src/assets/images/ict_lab_modern_1794424033426.jpg" 
                  alt="ICT Innovation Lab" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-gold mb-4">
                  <Monitor className="w-6 h-6" />
                  <span className="font-bold text-sm uppercase tracking-widest">Innovation</span>
                </div>
                <h4 className="text-2xl font-bold text-navy mb-4">ICT Innovation Lab</h4>
                <p className="text-slate-600">Equipped with the latest hardware and software, where students learn coding, robotics, and digital media.</p>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/src/assets/images/science_lab_modern_1794424048731.jpg" 
                  alt="Science Discovery Center" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-emerald-600 mb-4">
                  <FlaskConical className="w-6 h-6" />
                  <span className="font-bold text-sm uppercase tracking-widest">Discovery</span>
                </div>
                <h4 className="text-2xl font-bold text-navy mb-4">Science Discovery Center</h4>
                <p className="text-slate-600">A hands-on laboratory for experiments and research, fostering a spirit of inquiry and scientific thought.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Heart(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  );
}
