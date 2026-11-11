import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, User, Phone, Mail, MapPin, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { formatWhatsAppUrl } from '../lib/utils';

const schema = z.object({
  parentName: z.string().min(3, 'Full name is required'),
  studentName: z.string().min(3, 'Student name is required'),
  studentAge: z.string().min(1, 'Student age is required'),
  targetClass: z.string().min(1, 'Target class is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  location: z.string().min(3, 'Location is required'),
  term: z.string().min(1, 'Target term is required'),
});

type FormData = z.infer<typeof schema>;

const steps = [
  { title: 'Online Enquiry', desc: 'Fill out our initial inquiry form.' },
  { title: 'School Tour', desc: 'Visit our campus and meet the team.' },
  { title: 'Assessment', desc: 'A friendly evaluation of the child.' },
  { title: 'Admission', desc: 'Formal offer and enrollment.' },
];

export default function Admissions() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const message = `*Admission Enquiry - Hatfield Montessori School*\n\n` +
      `*Parent Name:* ${data.parentName}\n` +
      `*Student Name:* ${data.studentName}\n` +
      `*Age:* ${data.studentAge}\n` +
      `*Target Class:* ${data.targetClass}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Location:* ${data.location}\n` +
      `*Target Term:* ${data.term}`;
    
    const whatsappUrl = formatWhatsAppUrl('233244367117', message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-navy mb-6">Join Our Family</h1>
          <p className="text-lg text-slate-600">
            We are excited to welcome new students who share our passion for learning and character development. Follow our simple process to get started.
          </p>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 bg-gold text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-gold/20 relative z-10">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-100 -z-0"></div>
                )}
                <h4 className="text-xl font-bold text-navy mb-2">{s.title}</h4>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-step Form */}
      <section className="py-24 bg-white" id="enquiry-form">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-navy p-10 text-white text-center">
              <h3 className="text-3xl font-bold mb-2">Admission Enquiry Form</h3>
              <p className="text-slate-400 text-sm">Please provide the details below and we will contact you via WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-10 lg:p-16 space-y-12">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Parent / Guardian Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input {...register('parentName')} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="John Doe" />
                        </div>
                        {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Student Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input {...register('studentName')} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="Jane Doe" />
                        </div>
                        {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Student Age</label>
                        <input {...register('studentAge')} className="w-full px-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="e.g., 5 Years" />
                        {errors.studentAge && <p className="text-red-500 text-xs mt-1">{errors.studentAge.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Target Class</label>
                        <select {...register('targetClass')} className="w-full px-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all appearance-none">
                          <option value="">Select Class</option>
                          <option value="Nursery">Nursery</option>
                          <option value="KG1">KG 1</option>
                          <option value="KG2">KG 2</option>
                          <option value="Primary1">Primary 1</option>
                          <option value="Primary2">Primary 2</option>
                          <option value="Primary3">Primary 3</option>
                          <option value="Primary4">Primary 4</option>
                          <option value="Primary5">Primary 5</option>
                          <option value="Primary6">Primary 6</option>
                          <option value="Secondary">Secondary</option>
                        </select>
                        {errors.targetClass && <p className="text-red-500 text-xs mt-1">{errors.targetClass.message}</p>}
                      </div>
                    </div>
                    <button type="button" onClick={() => setStep(2)} className="w-full py-5 bg-gold text-navy font-bold rounded-2xl hover:bg-amber-500 transition-all flex items-center justify-center gap-2">
                      CONTINUE TO CONTACT INFO
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input {...register('phone')} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="+233 24 000 0000" />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input {...register('email')} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="email@example.com" />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Residential Location</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input {...register('location')} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="Area in Accra" />
                        </div>
                        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Target Term / Session</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <select {...register('term')} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all appearance-none">
                            <option value="">Select Term</option>
                            <option value="Next Term">Next Term</option>
                            <option value="Academic Year 2026/27">Academic Year 2026/27</option>
                            <option value="Summer Camp">Summer Camp</option>
                          </select>
                        </div>
                        {errors.term && <p className="text-red-500 text-xs mt-1">{errors.term.message}</p>}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(1)} className="flex-1 py-5 border-2 border-slate-100 text-slate-400 font-bold rounded-2xl hover:border-gold hover:text-gold transition-all">
                        BACK
                      </button>
                      <button type="submit" className="flex-[2] py-5 bg-gold text-navy font-bold rounded-2xl hover:bg-amber-500 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gold/20">
                        SUBMIT VIA WHATSAPP
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* Info Blocks */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-navy text-white rounded-[3rem] space-y-6">
              <h4 className="text-2xl font-bold">Important Dates</h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/10 pb-4">
                  <span>Admissions Open</span>
                  <span className="font-bold text-gold">January 15th</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-4">
                  <span>Entrance Assessments</span>
                  <span className="font-bold text-gold">March - June</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-4">
                  <span>Term Starts</span>
                  <span className="font-bold text-gold">September 1st</span>
                </li>
              </ul>
            </div>
            <div className="p-12 bg-gold text-navy rounded-[3rem] space-y-6">
              <h4 className="text-2xl font-bold">Tuition & Fees</h4>
              <p className="text-navy/80 leading-relaxed">
                We maintain a transparent fee structure. Full details regarding termly fees, uniform costs, and meal plans are provided during the campus tour or upon successful assessment.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold group">
                  REQUEST FEE STRUCTURE
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
