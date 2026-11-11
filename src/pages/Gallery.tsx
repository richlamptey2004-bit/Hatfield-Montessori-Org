import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { cn } from '../lib/utils';

interface GalleryItem {
  id: string;
  category: string;
  imageUrl: string;
  description?: string;
}

const categories = ['All', 'Classrooms', 'Labs', 'ICT', 'Playground', 'Events'];

const initialItems: GalleryItem[] = [
  {
    id: '1',
    category: 'Classrooms',
    imageUrl: '/src/assets/images/ghanaian_nursery_students_1794424393318.jpg',
    description: 'Our modern Montessori nursery classroom designed for sensory learning.'
  },
  {
    id: '2',
    category: 'ICT',
    imageUrl: '/src/assets/images/ict_lab_modern_1794424033426.jpg',
    description: 'The Innovation Lab where students explore digital technology and coding.'
  },
  {
    id: '3',
    category: 'Labs',
    imageUrl: '/src/assets/images/science_lab_modern_1794424048731.jpg',
    description: 'Well-equipped science laboratories for practical research and discovery.'
  },
  {
    id: '4',
    category: 'Events',
    imageUrl: '/assets/aistudio/Hatfield_WhatsApp_Image_4bffff93.jpeg',
    description: 'Celebrating our 10th Anniversary graduation at Hatfield.'
  }
];

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        // Map database snake_case to camelCase if necessary
        const dbItems = data.map(item => ({
          id: item.id,
          category: item.category,
          imageUrl: item.image_url,
          description: item.description
        }));
        setItems([...dbItems, ...initialItems]);
      }
    };

    fetchGallery();
  }, []);

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-navy mb-6">Facilities Gallery</h1>
            <p className="text-lg text-slate-600">Take a look at our modern campus and the vibrant life of our students.</p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-white rounded-2xl shadow-sm border border-slate-200 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
                  filter === cat ? "bg-navy text-white shadow-md" : "text-slate-500 hover:bg-slate-50 hover:text-navy"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.description || 'School facility'} 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                    <div className="bg-gold/90 self-start px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-3">
                      {item.category}
                    </div>
                    <p className="text-sm font-medium leading-relaxed">{item.description}</p>
                    <div className="mt-4 flex justify-end">
                      <div className="p-2 bg-white/20 rounded-full backdrop-blur-md">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 items-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex-[3] relative">
                <img 
                  src={selectedImage.imageUrl} 
                  alt="Full view" 
                  className="rounded-[2.5rem] shadow-2xl max-h-[80vh] w-full object-contain"
                />
              </div>
              <div className="flex-1 text-white space-y-6">
                <div>
                  <span className="px-4 py-1 bg-gold text-navy rounded-full text-xs font-bold uppercase tracking-widest">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-3xl font-bold mt-6 leading-tight">School Facility Spotlight</h3>
                </div>
                <p className="text-slate-300 leading-relaxed italic">
                  {selectedImage.description || "Witness the premium learning environment at Hatfield Montessori School."}
                </p>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Captured at Hatfield Campus</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
