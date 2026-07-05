export default function Footer() {
  return (
    <footer style={{backgroundColor: '#6B1A2A'}}>
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + About */}
          <div className="flex flex-col gap-4">
            <img
              src="/imgs/logo.png"
              alt="Naddaf Jewelry"
              className="h-16 w-auto object-contain self-start"
              style={{filter: 'brightness(0) saturate(100%) invert(80%) sepia(40%) saturate(600%) hue-rotate(5deg) brightness(1.1)'}}
            />
            <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>
              Crafting timeless jewelry with passion and precision since 2009. Every piece tells your story.
            </p>
            <div className="flex gap-4 mt-2">
              {[
                { name: 'Instagram', icon: (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                )},
                { name: 'Facebook', icon: (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                )},
                { name: 'WhatsApp', icon: (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                  </svg>
                )},
              ].map(s => (
                <a key={s.name} href={s.name === 'WhatsApp' ? 'https://wa.me/96171937469' : '#'} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{backgroundColor: 'rgba(232,201,122,0.15)', color: '#E8C97A'}}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm tracking-widest" style={{color: '#E8C97A'}}>QUICK LINKS</h3>
            {[
              { name: 'Home', href: '/' },
              { name: 'Shop', href: '/products' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact', href: '/contact' },
              { name: 'Shipping Policy', href: '/shipping' },
            ].map(link => (
              <a key={link.name} href={link.href} className="text-sm transition-all duration-200 hover:opacity-100" style={{color: 'rgba(255,255,255,0.6)'}}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm tracking-widest" style={{color: '#E8C97A'}}>CATEGORIES</h3>
            {['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Keychains', 'Watches', 'Sets'].map(cat => (
              <a key={cat} href={`/products/${cat}`} className="text-sm transition-all duration-200 hover:opacity-100" style={{color: 'rgba(255,255,255,0.6)'}}>
                {cat}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm tracking-widest" style={{color: '#E8C97A'}}>CONTACT US</h3>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/96171937469" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-all">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#E8C97A" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                </svg>
                <p className="text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>+961 71 937 469</p>
              </a>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#E8C97A" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
                <p className="text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>Tripoli, Lebanon</p>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#E8C97A" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p className="text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>Mon-Sat: 9AM - 8PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{borderTop: '1px solid rgba(232,201,122,0.2)'}}>
          <p className="text-xs" style={{color: 'rgba(255,255,255,0.4)'}}>
            © 2025 Naddaf Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/shipping" className="text-xs hover:opacity-100 transition-all" style={{color: 'rgba(255,255,255,0.4)'}}>Shipping Policy</a>
            <a href="/contact" className="text-xs hover:opacity-100 transition-all" style={{color: 'rgba(255,255,255,0.4)'}}>Contact Us</a>
          </div>
        </div>

      </div>
    </footer>
  )
}