import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { supabase } from '../lib/supabase';
import { useState, useEffect } from 'react';

const ADMIN_EMAILS = ['richlamptey2004@gmail.com'];

export default function AdminTrigger() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAdmin(!!session?.user && ADMIN_EMAILS.includes(session.user.email || ''));
    };

    checkAdmin();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session?.user && ADMIN_EMAILS.includes(session.user.email || ''));
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/admin')}
      className="fixed bottom-8 left-8 z-[60] w-12 h-12 bg-navy/20 backdrop-blur-md border border-white/20 text-navy hover:bg-navy hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg group"
      title="Admin Dashboard"
    >
      <Lock className="w-5 h-5 transition-transform group-hover:rotate-12" />
      {isAdmin && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
      )}
    </motion.button>
  );
}
