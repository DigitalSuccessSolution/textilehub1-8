import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const shopCategories = [
    { name: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80' },
    { name: 'Leggings', image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&auto=format&fit=crop&q=80' },
    { name: 'Kurtis', image: 'https://images.pexels.com/photos/28512776/pexels-photo-28512776.jpeg' },
    { name: 'Dress Suits', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80' },
    { name: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80' },
    { name: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80' },
    { name: 'Suiting', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&auto=format&fit=crop&q=80' },
    { name: 'Shirting', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80' }
  ];

  const featuredCollections = [
    { name: 'FEATURED SAREES', desc: 'Timeless Elegance', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600' },
    { name: 'WOMEN\'S ETHNIC WEAR', desc: 'Grace & Beauty', image: 'https://images.pexels.com/photos/8886951/pexels-photo-8886951.jpeg' },
    { name: 'MEN\'S ETHNIC WEAR', desc: 'Classic Tradition', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600' },
    { name: 'KIDS COLLECTION', desc: 'Joyful Styles', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=600' },
  ];

  const reviews = [
    {
      name: "Rajesh Sharma",
      role: "Retailer, Delhi",
      text: "Textile Mall has been our trusted partner since years. The quality, prices and service are unmatched in the entire industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Ahmed Al-Sayed",
      role: "Gulf Textiles, UAE",
      text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Vikas Kulkarni",
      role: "National Solutions",
      text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-vastram-cream font-outfit pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] bg-vastram-brown overflow-hidden">
        <img
          src="images/image.png"
          alt="Elegant Indian Woman in Saree"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-100"
        />
        {/* Subtle full-width overlay to make text readable */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Soft gold gradient shadow on the left side for mobile view */}
        <div className="absolute inset-y-0 left-0 w-[85%] bg-gradient-to-r from-vastram-gold/80 via-vastram-gold/40 to-transparent pointer-events-none z-10 md:hidden"></div>

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center justify-between pt-24 md:pt-0 z-20">
          <div className="max-w-xl z-20 pl-4 md:pl-12">
            <h1 className="font-playfair text-[50px] md:text-[70px] text-vastram-brown leading-[1.1] tracking-tight mb-4">
              Heritage. <br /> Handcrafted. <br /> Timeless.
            </h1>
            <p className="text-vastram-cream/90 text-[18px] leading-[1.6] font-medium mb-10 max-w-sm">
              Explore our exclusive collection of Pure Elegance.
            </p>
            <div className="flex gap-4">
              <Link to="/products" className="bg-vastram-gold text-vastram-brown px-8 py-4 rounded-none text-[13px] font-bold tracking-[0.1em] hover:bg-vastram-gold-hover transition-colors shadow-sm uppercase">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-20 space-y-24">

        {/* Shop By Category */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-vastram-border pb-4 mb-12">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl text-vastram-brown font-bold uppercase tracking-wide">Shop By Category</h2>
              <div className="h-[2px] w-16 bg-vastram-gold mt-4"></div>
            </div>
            <Link to="/products" className="mt-4 md:mt-0 text-xs font-bold tracking-widest text-vastram-gold uppercase hover:text-vastram-brown transition-colors flex items-center gap-1.5 border-b border-vastram-gold pb-1 self-start md:self-auto">
              View All <ArrowRight size={12} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 justify-items-center">
            {shopCategories.map((cat, idx) => (
              <Link to="/products" key={idx} className="flex flex-col items-center w-full group">
                <div className="w-full aspect-square rounded-none overflow-hidden mb-4 shadow-sm transition-all duration-300">
                  <div className="w-full h-full relative overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <span className="text-[11px] font-bold text-vastram-text text-center tracking-[0.1em] uppercase group-hover:text-vastram-gold transition-colors">{cat.name}</span>
                <span className="mt-2 text-[10px] text-vastram-gold border border-vastram-gold px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Collections */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-vastram-border pb-4 mb-12">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl text-vastram-brown font-bold uppercase tracking-wide">Featured Collections</h2>
              <div className="h-[2px] w-16 bg-vastram-gold mt-4"></div>
            </div>
            <Link to="/products" className="mt-4 md:mt-0 text-xs font-bold tracking-widest text-vastram-gold uppercase hover:text-vastram-brown transition-colors flex items-center gap-1.5 border-b border-vastram-gold pb-1 self-start md:self-auto">
              View All <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {featuredCollections.map((collection, idx) => (
              <Link 
                to="/products" 
                key={idx} 
                className="group flex flex-col bg-white border border-gray-100 hover:border-vastram-gold hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/5] overflow-hidden relative bg-vastram-cream">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-vastram-brown/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                {/* Info Container below the card */}
                <div className="p-3 md:p-5 text-center flex-grow flex flex-col justify-between border-t border-gray-50 bg-white">
                  <div>
                    <h4 className="text-vastram-brown font-bold tracking-widest text-sm uppercase group-hover:text-vastram-gold transition-colors mb-2 font-playfair">
                      {collection.name}
                    </h4>
                    <p className="text-gray-500 text-xs tracking-wide">
                      {collection.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-center text-[10px] font-bold tracking-widest text-vastram-gold uppercase">
                    Discover Collection <ArrowRight size={10} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y border-vastram-border py-12">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-playfair text-3xl md:text-4xl text-vastram-gold mb-3">25+</span>
              <span className="text-vastram-text text-[11px] font-bold tracking-[0.1em] uppercase">Years of Excellence</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-playfair text-3xl md:text-4xl text-vastram-gold mb-3">100+</span>
              <span className="text-vastram-text text-[11px] font-bold tracking-[0.1em] uppercase">Premium Brands</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-playfair text-3xl md:text-4xl text-vastram-gold mb-3">5000+</span>
              <span className="text-vastram-text text-[11px] font-bold tracking-[0.1em] uppercase">Retail Outlets</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-playfair text-3xl md:text-4xl text-vastram-gold mb-3">10L+</span>
              <span className="text-vastram-text text-[11px] font-bold tracking-[0.1em] uppercase">Happy Customers</span>
            </div>
          </div>
        </section>

        {/* Customer Reviews instead of Blogs */}
        <section className="bg-vastram-light p-8 md:p-12 border border-vastram-border">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold text-vastram-text uppercase tracking-widest">What Our Customers Say</h3>
            <div className="h-[2px] w-12 bg-vastram-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 border border-vastram-border bg-vastram-cream/30 hover:bg-vastram-cream transition-colors duration-300">
                <div className="w-16 h-16 rounded-none overflow-hidden mb-4 border-2 border-vastram-gold">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-vastram-gold text-vastram-gold" />
                  ))}
                </div>
                <p className="font-playfair text-vastram-text text-lg italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-vastram-gold">— {review.name}</span>
                <span className="text-[10px] text-gray-500 font-medium uppercase mt-1">{review.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
          <div className="p-8 border border-vastram-border bg-vastram-light flex flex-col justify-between group hover:border-vastram-gold transition-colors">
            <div>
              <h4 className="font-playfair text-xl text-vastram-text mb-4 uppercase">Latest Trade Circulars</h4>
              <p className="text-sm text-vastram-text/70 mb-6">Stay updated with our newest collections and trade policies.</p>
            </div>
            <Link to="/trade-circular" className="flex items-center text-[11px] font-bold tracking-widest text-vastram-gold uppercase group-hover:text-vastram-gold-hover">
              View All <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
          <div className="p-8 border border-vastram-border bg-vastram-light flex flex-col justify-between group hover:border-vastram-gold transition-colors">
            <div>
              <h4 className="font-playfair text-xl text-vastram-text mb-4 uppercase">Career Opportunities</h4>
              <p className="text-sm text-vastram-text/70 mb-6">Join our dynamic team and be a part of our growth story.</p>
            </div>
            <Link to="/career" className="flex items-center text-[11px] font-bold tracking-widest text-vastram-gold uppercase group-hover:text-vastram-gold-hover">
              View Openings <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
          <div className="p-8 border border-vastram-border bg-vastram-light flex flex-col justify-between group hover:border-vastram-gold transition-colors">
            <div>
              <h4 className="font-playfair text-xl text-vastram-text mb-4 uppercase">Get In Touch</h4>
              <p className="text-sm text-vastram-text/70 mb-2">📞 +91 79 6622 5500</p>
              <p className="text-sm text-vastram-text/70 mb-6">✉️ info@vastramtextile.com</p>
            </div>
            <Link to="/contact" className="flex items-center text-[11px] font-bold tracking-widest text-vastram-gold uppercase group-hover:text-vastram-gold-hover">
              Contact Us <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
