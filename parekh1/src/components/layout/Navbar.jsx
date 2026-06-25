import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setMoreOpen(false);
  };

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Product Page', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
  ];

  const dropdownLinks = [
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog Page', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career Page', path: '/career' },
    { name: 'Customer Review', path: '/customer-review' },
    { name: 'Business Media Gallery', path: '/media-gallery' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <nav className="bg-brand-light shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
                <ShoppingBag className="h-8 w-8 text-brand-maroon mr-2" />
                <span className="font-serif font-bold text-2xl text-brand-darkbrown tracking-wider">
                  Aura<span className="text-brand-maroon">Weave</span>
                </span>
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center space-x-6">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-brand-maroon px-2 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Desktop Dropdown */}
              <div
                className="relative group h-full flex items-center"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-brand-maroon px-2 py-2 rounded-md text-sm font-medium transition-colors">
                  Pages <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 w-56 bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300 transform origin-top ${
                    isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                  } border border-gray-100`}
                >
                  <div className="py-2">
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-maroon hover:text-white transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/trade-enquiry"
                className="bg-brand-maroon text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-900 transition-colors shadow-sm ml-2"
              >
                Trade Enquiry
              </Link>
            </div>

            {/* Hamburger button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-brand-maroon focus:outline-none z-[110] relative"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Full-screen overlay menu ── */}
      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`lg:hidden fixed inset-0 z-[90] transition-all duration-300 ${
          isOpen
            ? 'bg-black/60 backdrop-blur-sm pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-xs z-[100] bg-brand-light shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <span className="font-serif font-bold text-lg text-brand-darkbrown">
            Aura<span className="text-brand-maroon">Weave</span>
          </span>
          <button onClick={closeMenu} className="text-gray-500 hover:text-brand-maroon">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable links */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-maroon hover:bg-gray-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* More Pages accordion */}
          <div className="border-t border-gray-100 mt-2 pt-2">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              More Pages
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  moreOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {moreOpen && (
              <div className="mt-1 ml-3 space-y-0.5">
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-brand-maroon hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-4 py-4 border-t border-gray-200">
          <Link
            to="/trade-enquiry"
            onClick={closeMenu}
            className="block w-full text-center px-4 py-3 rounded-lg text-sm font-bold bg-brand-maroon text-white hover:bg-red-900 transition-colors shadow-sm"
          >
            Trade Enquiry
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
