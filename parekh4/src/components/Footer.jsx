export default function Footer() {
  return (
    <footer className="bg-[#2d0a4e] text-pearl-100 py-10 sm:py-12 px-5 sm:px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        <div>
          <h2 className="font-playfair text-2xl text-[#D8A5AD] font-bold mb-4 sm:mb-6 tracking-wide">TEXMART</h2>
          <p className="text-sm text-pearl-100/80 leading-relaxed">
            Quality Textiles | Industrial Strength | Traditional Aesthetics. Experience elegance in every thread.
          </p>
        </div>
        
        <div>
          <h3 className="font-playfair text-lg text-pearl-50 mb-4 sm:mb-6">Quick Links</h3>
          <ul className="space-y-2.5 sm:space-y-3 text-sm text-pearl-100/80">
            <li><a href="/about" className="hover:text-[#D8A5AD] transition-colors">About Us</a></li>
            <li><a href="/products" className="hover:text-[#D8A5AD] transition-colors">Our Collection</a></li>
            <li><a href="/trade-enquiry" className="hover:text-[#D8A5AD] transition-colors">Trade Enquiry</a></li>
            <li><a href="/contact" className="hover:text-[#D8A5AD] transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-playfair text-lg text-pearl-50 mb-4 sm:mb-6">Contact Us</h3>
          <ul className="space-y-2.5 sm:space-y-3 text-sm text-pearl-100/80">
            <li>123 Premium Textile Avenue</li>
            <li>CHENNAI, TN, INDIA</li>
            <li>Email: info@texmart.com</li>
            <li>Phone: +91 6353778329</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#4a2a75] text-xs sm:text-sm text-pearl-100/60 text-center">
        <p>© 2026 | ALL RIGHTS RESERVED | TEXMART</p>
      </div>
    </footer>
  );
}
