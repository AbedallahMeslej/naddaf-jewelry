import { Gem, Sparkles, Circle, Key, Watch } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div>

      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-center overflow-hidden" style={{backgroundColor: '#FAF8F5'}}>
        
        {/* Background glow */}
        <div className="absolute right-0 top-0 w-2/3 h-full opacity-20 rounded-full blur-3xl" style={{backgroundColor: '#E8C97A'}}></div>

        {/* Left Content */}
        <div className="relative z-10 w-full md:w-1/2 px-8 md:px-20 flex flex-col gap-6">
          
          <p className="text-xs tracking-[0.4em] font-medium" style={{color: '#6B1A2A', opacity: 0.6}}>
            DARE TO BE UNFORGETTABLE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{color: '#1a1a1a'}}>
            Jewelry That <br />
            Defines <em className="not-italic font-bold" style={{color: '#6B1A2A'}}>You</em>
          </h1>

          <p className="text-base max-w-sm leading-relaxed" style={{color: '#1a1a1a', opacity: 0.6}}>
            Discover luxury pieces crafted with passion to leave a lasting impression.
          </p>

          <div className="flex gap-4 mt-2">
            <Link
              to="/products"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
            >
              Shop Now →
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 hover:opacity-70"
              style={{color: '#6B1A2A'}}
            >
              ▶ Our Story
            </Link>
          </div>

        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=900&q=90"
            alt="Naddaf Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 md:block hidden" style={{background: 'linear-gradient(to right, #FAF8F5 5%, transparent 40%)'}}></div>
          <div className="absolute inset-0 md:hidden" style={{background: 'linear-gradient(to top, #FAF8F5 50%, transparent)'}}></div>
        </div>

      </div>

      {/* Categories Bar */}
      <div className="py-10 px-8" style={{backgroundColor: '#FAF8F5', borderTop: '1px solid rgba(107,26,42,0.1)', borderBottom: '1px solid rgba(107,26,42,0.1)'}}>
        <div className="flex justify-center gap-6 md:gap-12 flex-wrap">
          {[
            { name: 'Rings', icon: (
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                <path strokeLinecap="round" d="M8 10H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3"/>
              </svg>
            )},
            { name: 'Necklaces', icon: (
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" d="M12 3C8 3 4 6 4 10M12 3c4 0 8 3 8 7M4 10c0 3 2 5 4 6M20 10c0 3-2 5-4 6M8 16c1 2 2 3 4 3s3-1 4-3"/>
                <circle cx="12" cy="19" r="2"/>
              </svg>
            )},
            { name: 'Earrings', icon: (
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <circle cx="8" cy="5" r="1.5"/>
                <line x1="8" y1="6.5" x2="8" y2="13" strokeLinecap="round"/>
                <circle cx="8" cy="16" r="3"/>
                <circle cx="16" cy="5" r="1.5"/>
                <line x1="16" y1="6.5" x2="16" y2="13" strokeLinecap="round"/>
                <circle cx="16" cy="16" r="3"/>
              </svg>
            )},
            { name: 'Bracelets', icon: (
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <circle cx="12" cy="12" r="7"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
            )},
            { name: 'Keychains', icon: (
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <circle cx="12" cy="7" r="4"/>
                <path strokeLinecap="round" d="M12 11v9M10 17h4"/>
              </svg>
            )},
            { name: 'Sets', icon: (
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <rect x="8" y="3" width="8" height="8" rx="2"/>
                <path strokeLinecap="round" d="M6 21a6 6 0 0 1 12 0"/>
              </svg>
            )},
            { name: 'Watches', icon: (
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <rect x="7" y="7" width="10" height="10" rx="5"/>
                <path strokeLinecap="round" d="M12 9v3l1.5 1.5M9 7l1-3h4l1 3M9 17l1 3h4l1-3"/>
              </svg>
            )},
          ].map(cat => (
            <Link
              to={`/products/${cat.name}`}
              key={cat.name}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{backgroundColor: 'rgba(107,26,42,0.08)', color: '#6B1A2A'}}
              >
                {cat.icon}
              </div>
              <p className="text-xs font-semibold tracking-wide" style={{color: '#6B1A2A'}}>{cat.name}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}