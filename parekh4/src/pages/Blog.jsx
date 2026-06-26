import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const categories = ['All', 'Craftsmanship', 'Innovation', 'Collections'];

const posts = [
  {
    id: 1,
    title: 'The Art of Handloom Weaving: A Timeless Tradition',
    author: 'Priya Mehta',
    category: 'Craftsmanship',
    date: 'June 18, 2026',
    description:
      'Explore the centuries-old craft of handloom weaving and how TEXMART is helping preserve this art form while making it accessible to the modern consumer. From raw yarn to finished saree — a journey of skill, patience, and pride.',
    image: 'https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?w=800&auto=format&fit=crop&q=70',
  },
  {
    id: 2,
    title: 'Sustainable Textiles: The Future of Fashion',
    author: 'Rahul Singhania',
    category: 'Innovation',
    date: 'June 05, 2026',
    description:
      'As the world moves towards eco-conscious living, TEXMART is leading the charge with sustainable fabric options, organic dyes, and zero-waste manufacturing practices — without compromising on premium quality.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=70',
  },
  {
    id: 3,
    title: 'Rose Gold & Sapphire: The New Festive Collection',
    author: 'Ananya Desai',
    category: 'Collections',
    date: 'May 28, 2026',
    description:
      'TEXMART unveils its much-awaited festive collection — an exquisite blend of rose gold hues and deep sapphire tones. Discover exclusive Kurtis, Dress Suits, and Silk Sarees crafted for the grandeur of every celebration.',
    image: '/anarkali_ethnic_suit.png',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8 sm:space-y-12 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">Blog</h1>
        <p className="text-gray-500 text-sm text-center max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 px-4">
          Stay informed with the latest trends in textiles, craftsmanship stories, and collection launches from the TEXMART ecosystem.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border ${
              activeCategory === cat
                ? 'bg-[#2d0a4e] text-white border-[#2d0a4e] shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#d8a5ad]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
        {filtered.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="h-32 sm:h-56 overflow-hidden relative shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Category Badge */}
              <div className="absolute top-2 left-2 bg-[#2d0a4e]/90 text-white px-2 py-0.5 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                {post.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-6 flex flex-col flex-grow">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <User size={10} /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={10} /> {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xs sm:text-lg lg:text-xl text-[#2d0a4e] mb-2 group-hover:text-[#d8a5ad] transition-colors leading-snug flex-grow line-clamp-2">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">{post.description}</p>

              {/* Read More */}
              <p className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-[#2d0a4e] uppercase tracking-wider group-hover:text-[#d8a5ad] transition-colors mt-auto">
                Read Article <ArrowRight size={13} />
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
