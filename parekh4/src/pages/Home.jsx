import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const categories = [
    {
      name: 'Sarees',
      tagline: 'Traditional Silk & Zari Weaves',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Leggings',
      tagline: 'Premium 4-Way Stretch Cotton',
      image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Kurtis',
      tagline: 'Designer Georgette & Chikankari',
      image: '/designer_kurti.png'
    },
    {
      name: 'Dress Suits',
      tagline: 'Embroidered Salwar Kameez Materials',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Bedsheets',
      tagline: 'Luxury Bed Linens & Sheets',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Hosiery',
      tagline: 'Everyday Comfy Essentials',
      image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Suiting',
      tagline: 'Merino Wool & Premium Blends',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Shirting',
      tagline: 'Egyptian Cotton & Shirting Rolls',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-[55vw] min-h-[300px] max-h-[480px] rounded-3xl overflow-hidden shadow-2xl flex items-center">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&auto=format&fit=crop&q=80"
          alt="Premium Textile Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text Container Card inside Hero */}
        <div className="absolute inset-x-0 bottom-0 sm:inset-y-0 sm:left-12 md:left-20 lg:left-28 flex items-end sm:items-center px-4 py-6 sm:p-0 z-10">
          <div className="bg-[#2d0a4e]/85 backdrop-blur-md p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl max-w-md md:max-w-lg text-white shadow-2xl border border-white/10 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-playfair text-2xl sm:text-4xl md:text-5xl text-white leading-tight font-bold"
            >
              Elegance Woven <br />
              <span className="text-[#d8a5ad] italic">into Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-3 text-white/80 text-xs sm:text-sm font-outfit leading-relaxed"
            >
              Discover the epitome of premium textile manufacturing. A legacy of quality, sophistication, and uncompromised style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-5 sm:mt-6"
            >
              <a href="/products" className="inline-flex items-center gap-2 bg-[#d8a5ad] text-[#2d0a4e] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-md">
                Explore Collection <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="space-y-6 sm:space-y-8">
        <div className="flex justify-between items-end pb-2 border-b border-gray-100">
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-[#2d0a4e] font-bold">Shop by Categories</h2>
          </div>
          <a href="/products" className="hidden sm:inline-flex items-center gap-2 text-[#2d0a4e] hover:text-[#d8a5ad] transition-colors font-bold text-xs uppercase tracking-widest">
            View All <ArrowRight size={15} />
          </a>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {categories.map((cat, idx) => (
            <motion.a
              href="/products"
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group flex flex-col rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-400 bg-white"
            >
              {/* Image Section */}
              <div className="h-[120px] sm:h-[180px] md:h-[220px] w-full overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content Block (Below the Image) */}
              <div className="p-3 sm:p-5 flex flex-col justify-center text-center bg-white flex-grow">
                {/* Category Name */}
                <h3 className="font-playfair text-sm sm:text-base md:text-lg font-bold text-[#2d0a4e] leading-tight transition-colors group-hover:text-[#d8a5ad]">
                  {cat.name}
                </h3>

                {/* Category Tagline */}
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1 font-outfit line-clamp-1">
                  {cat.tagline}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="flex sm:hidden justify-center mt-6">
          <a href="/products" className="inline-flex items-center gap-2 text-[#2d0a4e] border-2 border-[#2d0a4e] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2d0a4e] hover:text-white transition-colors">
            View All Products <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
