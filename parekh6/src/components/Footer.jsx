export default function Footer() {
  return (
    <footer className="bg-vastram-brown text-vastram-cream pt-12 pb-6 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="font-playfair text-2xl text-vastram-gold font-bold mb-6 tracking-wide">VASTRAM</h2>
          <p className="text-sm text-vastram-cream/80 leading-relaxed max-w-sm">
            India's most trusted textile retail destination for quality, variety and value since 1999.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-vastram-gold text-vastram-cream/80 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-vastram-gold text-vastram-cream/80 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:text-vastram-gold text-vastram-cream/80 transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-vastram-gold text-vastram-cream/80 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-playfair text-lg text-vastram-gold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-vastram-cream/80">
            <li><a href="/about" className="hover:text-vastram-gold transition-colors">About Us</a></li>
            <li><a href="/products" className="hover:text-vastram-gold transition-colors">Products Gallery</a></li>
            <li><a href="/trade-enquiry" className="hover:text-vastram-gold transition-colors">Trade Enquiry</a></li>
            <li><a href="/contact" className="hover:text-vastram-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-playfair text-lg text-vastram-gold mb-6">Resources</h3>
          <ul className="space-y-3 text-sm text-vastram-cream/80">
            <li><a href="/retail-management" className="hover:text-vastram-gold transition-colors">Our Retail Management</a></li>
            <li><a href="/trade-circular" className="hover:text-vastram-gold transition-colors">Trade Circular</a></li>
            <li><a href="/notice-board" className="hover:text-vastram-gold transition-colors">Notice Board</a></li>
            <li><a href="/faq" className="hover:text-vastram-gold transition-colors">FAQ Page</a></li>
          </ul>
        </div>
        
        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-playfair text-lg text-vastram-gold mb-6">Contact Us</h3>
          <ul className="space-y-3 text-sm text-vastram-cream/80">
            <li>Vastram Textile Retail Mall, B/h. New Textile Market,</li>
            <li>Ring Road, Surat - 395002, India</li>
            <li>Email: info@vastramtextile.com</li>
            <li>Phone: +91 79 6622 5500</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-vastram-text text-sm text-vastram-cream/60 flex flex-col lg:flex-row justify-between items-center">
        <p>© 2026 Vastram Textile Retail Mall. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
