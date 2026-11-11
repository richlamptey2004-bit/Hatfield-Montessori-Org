import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LogIn, LogOut, Image as ImageIcon, Calendar, FileText, 
  Plus, Trash2, Save, Upload, Loader2, AlertCircle, CheckCircle2, ShieldCheck, X 
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { cn } from '../lib/utils';

const ADMIN_EMAILS = ['richlamptey2004@gmail.com'];

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'gallery' | 'events' | 'website_content'>('gallery');
  const [items, setItems] = useState<any[]>([]);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user && ADMIN_EMAILS.includes(session.user.email || '')) {
        setUser(session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user && ADMIN_EMAILS.includes(session.user.email || '')) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from(activeTab)
        .select('*')
        .order(activeTab === 'website_content' ? 'key' : 'created_at', { ascending: false });
      
      if (!error && data) {
        setItems(data);
      }
    };

    fetchItems();
  }, [user, activeTab]);

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/admin'
        }
      });
      if (error) throw error;
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', msg: 'Login failed. Please try again.' });
    }
  };

  const handleLogout = () => supabase.auth.signOut();

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      const { error } = await supabase
        .from(activeTab)
        .delete()
        .eq(activeTab === 'website_content' ? 'key' : 'id', id);
      
      if (error) throw error;
      
      setItems(items.filter(item => (activeTab === 'website_content' ? item.key : item.id) !== id));
      setStatus({ type: 'success', msg: 'Item deleted successfully.' });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', msg: 'Delete failed.' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-navy animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 max-w-md w-full text-center space-y-8">
          <div className="w-20 h-20 bg-navy/5 rounded-3xl flex items-center justify-center mx-auto">
            <ShieldCheck className="w-10 h-10 text-navy" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-navy mb-2">Staff Portal</h1>
            <p className="text-slate-500">Please sign in with an authorized admin account to manage school content.</p>
          </div>
          {status && (
            <div className={cn("p-4 rounded-xl text-sm font-medium", status.type === 'success' ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700")}>
              {status.msg}
            </div>
          )}
          <button 
            onClick={handleLogin}
            className="w-full py-4 bg-navy text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-navy">Admin Dashboard</h1>
            <p className="text-slate-500">Manage your website content and gallery items.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                {user.email?.[0].toUpperCase()}
              </div>
              <span className="text-sm font-semibold text-navy">{user.email}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="p-3 bg-white text-red-500 rounded-2xl hover:bg-red-50 transition-colors border border-slate-100 shadow-sm"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status Message */}
        <AnimatePresence>
          {status && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "mb-8 p-4 rounded-2xl flex items-center gap-3 font-medium",
                status.type === 'success' ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-red-50 text-red-700 border border-red-100"
              )}
            >
              {status.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              {status.msg}
              <button onClick={() => setStatus(null)} className="ml-auto hover:opacity-50">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'gallery', label: 'Gallery', icon: ImageIcon },
              { id: 'events', label: 'Events', icon: Calendar },
              { id: 'content', label: 'Content', icon: FileText },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all",
                  activeTab === tab.id ? "bg-navy text-white shadow-xl shadow-navy/20" : "bg-white text-slate-500 hover:bg-slate-100"
                )}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Area */}
          <div className="lg:col-span-3 space-y-8">
            <GalleryManager activeTab={activeTab} items={items} onDelete={handleDelete} setStatus={setStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryManager({ activeTab, items, onDelete, setStatus, setItems }: any) {
  const [formData, setFormData] = useState<any>({});
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      const payload: any = { ...formData };
      
      if (activeTab === 'gallery') {
        payload.image_url = formData.imageUrl;
        delete payload.imageUrl;
      }

      if (activeTab === 'events') {
        payload.event_date = formData.date;
        payload.image_url = formData.imageUrl || '/assets/aistudio/Hatfield_WhatsApp_Image_4bffff93.jpeg';
        delete payload.date;
      }
      
      const { data, error } = await supabase
        .from(activeTab)
        .insert([payload])
        .select();
      
      if (error) throw error;
      
      if (data) {
        setItems([data[0], ...items]);
      }
      setFormData({});
      setStatus({ type: 'success', msg: 'Item added successfully!' });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', msg: 'Failed to add item.' });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Add Form */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add New {activeTab === 'gallery' ? 'Gallery Photo' : activeTab === 'events' ? 'Event' : 'Content'}
        </h3>
        <form onSubmit={handleAdd} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTab === 'gallery' && (
              <>
                <select 
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-gold font-medium"
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  value={formData.category || ''}
                >
                  <option value="">Select Category</option>
                  <option value="Classrooms">Classrooms</option>
                  <option value="Labs">Labs</option>
                  <option value="ICT">ICT</option>
                  <option value="Playground">Playground</option>
                  <option value="Events">Events</option>
                </select>
                <input 
                  type="url" 
                  placeholder="Image URL" 
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-gold"
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  required
                  value={formData.imageUrl || ''}
                />
              </>
            )}
            {activeTab === 'events' && (
              <>
                <input 
                  type="text" 
                  placeholder="Event Title" 
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-gold"
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  value={formData.title || ''}
                />
                <input 
                  type="date" 
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-gold"
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  value={formData.date || ''}
                />
              </>
            )}
            {activeTab === 'website_content' && (
              <>
                <input 
                  type="text" 
                  placeholder="Content Key (e.g., mission_text)" 
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-gold font-mono text-sm"
                  onChange={(e) => setFormData({ ...formData, key: e.target.value })}
                  required
                  value={formData.key || ''}
                />
              </>
            )}
          </div>
          <textarea 
            placeholder={activeTab === 'website_content' ? "Content Value (Text or JSON)" : "Description / Caption"}
            className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-gold resize-none"
            rows={3}
            onChange={(e) => setFormData({ ...formData, [activeTab === 'website_content' ? 'value' : 'description']: e.target.value })}
            value={formData.description || formData.value || ''}
            required
          />
          <button 
            type="submit" 
            disabled={isAdding}
            className="px-8 py-3 bg-gold text-navy font-bold rounded-xl hover:bg-amber-500 disabled:opacity-50 transition-all flex items-center gap-2 shadow-lg shadow-gold/20"
          >
            {isAdding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            SAVE {activeTab.toUpperCase().replace('_', ' ')}
          </button>
        </form>
      </div>

      {/* List */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 bg-slate-50/50">
          <h3 className="font-bold text-navy uppercase tracking-widest text-xs">Existing Items ({items.length})</h3>
        </div>
        <div className="divide-y divide-slate-50">
          {items.map((item: any) => (
            <div key={item.id || item.key} className="p-6 flex items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                {(item.image_url || item.imageUrl) && (
                  <img src={item.image_url || item.imageUrl} className="w-16 h-16 rounded-xl object-cover bg-slate-100 shadow-inner" alt="" />
                )}
                <div>
                  <h4 className="font-bold text-navy">{item.title || item.category || item.key}</h4>
                  <p className="text-xs text-slate-400 truncate max-w-[300px] font-medium">{item.description || item.value || 'No content'}</p>
                </div>
              </div>
              <button 
                onClick={() => onDelete(item.id || item.key)}
                className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          {items.length === 0 && (
            <div className="p-12 text-center text-slate-400 italic font-medium">No items found in this category.</div>
          )}
        </div>
      </div>
    </div>
  );
}

