import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

export default function ProfilePage() {
  const { wishlist } = useWishlist()
  const { cart } = useCart()

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      {/* Header */}
      <div className="py-16 px-8 text-center" style={{backgroundColor: '#6B1A2A'}}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(232,201,122,0.2)'}}>
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#E8C97A" strokeWidth={1.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-1">My Account</h1>
        <p className="text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>Welcome to Naddaf Jewelry</p>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-12 flex flex-col gap-4">

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-6 rounded-2xl text-center" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
            <p className="text-3xl font-bold mb-1" style={{color: '#6B1A2A'}}>{wishlist.length}</p>
            <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>Wishlist Items</p>
          </div>
          <div className="p-6 rounded-2xl text-center" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
            <p className="text-3xl font-bold mb-1" style={{color: '#6B1A2A'}}>{cart.length}</p>
            <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>Cart Items</p>
          </div>
        </div>

        {/* Menu Items */}
        {[
          {
            label: 'My Wishlist',
            href: '/wishlist',
            desc: `${wishlist.length} saved items`,
            icon: (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
              </svg>
            )
          },
          {
            label: 'My Cart',
            href: '/cart',
            desc: `${cart.length} items in cart`,
            icon: (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/>
              </svg>
            )
          },
          {
            label: 'Track My Order',
            href: '/track-order',
            desc: 'Check your order status',
            icon: (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H3m13.5 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H9m10.125-9H3.375c-.621 0-1.125.504-1.125 1.125v4.5c0 .621.504 1.125 1.125 1.125h16.5c.621 0 1.125-.504 1.125-1.125v-4.5c0-.621-.504-1.125-1.125-1.125z"/>
              </svg>
            )
          },
          {
            label: 'Contact Us',
            href: '/contact',
            desc: 'Get in touch with us',
            icon: (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
            )
          },
          {
            label: 'Shipping Policy',
            href: '/shipping',
            desc: 'Delivery info & timelines',
            icon: (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
              </svg>
            )
          },
          {
            label: 'About Naddaf',
            href: '/about',
            desc: 'Our story & values',
            icon: (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
              </svg>
            )
          },
        ].map(item => (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-200 hover:scale-105"
            style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(107,26,42,0.08)', color: '#6B1A2A'}}>
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm" style={{color: '#1a1a1a'}}>{item.label}</p>
              <p className="text-xs mt-0.5" style={{color: 'rgba(0,0,0,0.5)'}}>{item.desc}</p>
            </div>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{color: 'rgba(107,26,42,0.3)'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
          </Link>
        ))}

        {/* WhatsApp */}
        
        <a  href="https://wa.me/96171937469"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-200 hover:scale-105 mt-2"
          style={{backgroundColor: '#25D366', color: 'white'}}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
            <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm">Chat with Us</p>
            <p className="text-xs opacity-80">+961 71 937 469</p>
          </div>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
          </svg>
        </a>

      </div>
    </div>
  )
}