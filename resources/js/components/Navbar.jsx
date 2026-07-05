import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSub, setOpenSub] = useState(null)
  const { count } = useCart()
  const { wishlist } = useWishlist()

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Collections',
      href: null,
      sub: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Keychains', 'Sets', 'Watches']
    },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shipping Policy', href: '/shipping' },
  ]

  return (
    <>
      <nav style={{backgroundColor: '#FAF8F5', borderBottom: '1px solid rgba(107,26,42,0.1)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">

            {/* Mobile: Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)} style={{color: '#6B1A2A'}}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <img
                src="/imgs/logo.png"
                alt="Naddaf Jewelry"
                className="h-14 w-auto object-contain"
                style={{filter: 'brightness(0) saturate(100%) invert(14%) sepia(60%) saturate(800%) hue-rotate(310deg) contrast(1.2)'}}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map(item => (
                item.href ? (
                  <Link key={item.name} to={item.href} className="text-sm font-medium transition-colors duration-200 hover:opacity-60" style={{color: '#6B1A2A'}}>
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setOpenSub(openSub === item.name ? null : item.name)}
                      className="text-sm font-medium transition-colors duration-200 hover:opacity-60 flex items-center gap-1"
                      style={{color: '#6B1A2A'}}
                    >
                      {item.name}
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>

                    {openSub === item.name && (
                      <div className="absolute top-10 left-0 z-50 rounded-2xl shadow-xl p-4 grid grid-cols-3 gap-2" style={{backgroundColor: '#FAF8F5', border: '1px solid rgba(107,26,42,0.1)', minWidth: '320px'}}>
                        {item.sub.map(sub => (
                          <Link
                            key={sub}
                            to={`/products/${sub}`}
                            onClick={() => setOpenSub(null)}
                            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                            style={{backgroundColor: 'rgba(107,26,42,0.05)', color: '#6B1A2A'}}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block transition-all duration-200 hover:opacity-60" style={{color: '#6B1A2A'}}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
                </svg>
              </button>
              <button className="hidden md:block transition-all duration-200 hover:opacity-60" style={{color: '#6B1A2A'}}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0"/>
                </svg>
              </button>
              <Link to="/cart" className="relative transition-all duration-200 hover:opacity-60" style={{color: '#6B1A2A'}}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/>
                </svg>
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold" style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}>
                    {count}
                  </span>
                )}
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)}></div>

          <div className="absolute top-0 left-0 bottom-0 w-4/5 max-w-sm flex flex-col" style={{backgroundColor: '#FAF8F5'}}>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5" style={{borderBottom: '2px solid #6B1A2A'}}>
              <p className="font-bold tracking-widest text-sm" style={{color: '#6B1A2A'}}>MENU</p>
              <button onClick={() => setIsOpen(false)} style={{color: '#6B1A2A'}}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto pb-24">
              {menuItems.map(item => (
                <div key={item.name}>
                  {item.sub ? (
                    <div
                      className="flex items-center justify-between px-6 py-5 transition-all duration-200 hover:opacity-60 cursor-pointer"
                      style={{borderBottom: '1px solid rgba(107,26,42,0.1)'}}
                      onClick={() => setOpenSub(openSub === item.name ? null : item.name)}
                    >
                      <span className="text-lg font-medium" style={{color: '#1a1a1a'}}>{item.name}</span>
                      <span style={{color: 'rgba(0,0,0,0.3)', fontSize: '20px'}}>
                        {openSub === item.name ? '−' : '+'}
                      </span>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-6 py-5 transition-all duration-200 hover:opacity-60"
                      style={{borderBottom: '1px solid rgba(107,26,42,0.1)'}}
                    >
                      <span className="text-lg font-medium" style={{color: '#1a1a1a'}}>{item.name}</span>
                      <span style={{color: 'rgba(0,0,0,0.3)', fontSize: '20px'}}>+</span>
                    </Link>
                  )}

                  {/* Subcategories */}
                  {item.sub && openSub === item.name && (
                    <div className="flex flex-col" style={{backgroundColor: 'rgba(107,26,42,0.03)'}}>
                      {item.sub.map(sub => (
                        <Link
                          key={sub}
                          to={`/products/${sub}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-10 py-3 text-sm transition-all duration-200 hover:opacity-60"
                          style={{borderBottom: '1px solid rgba(107,26,42,0.05)', color: '#6B1A2A'}}
                        >
                          → {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/wishlist"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-6 py-5 transition-all duration-200 hover:opacity-60"
                style={{borderBottom: '1px solid rgba(107,26,42,0.1)'}}
              >
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{color: '#6B1A2A'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                  <span className="text-lg font-medium" style={{color: '#1a1a1a'}}>
                    Wishlist {wishlist.length > 0 && `(${wishlist.length})`}
                  </span>
                </div>
                <span style={{color: 'rgba(0,0,0,0.3)', fontSize: '20px'}}>+</span>
              </Link>

              <div
                className="flex items-center justify-between px-6 py-5"
                style={{borderBottom: '1px solid rgba(107,26,42,0.1)'}}
              >
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{color: '#6B1A2A'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
                  </svg>
                  <span className="text-lg font-medium" style={{color: '#1a1a1a'}}>Search</span>
                </div>
                <span style={{color: 'rgba(0,0,0,0.3)', fontSize: '20px'}}>+</span>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}