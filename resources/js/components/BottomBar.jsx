import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function BottomBar() {
  const [active, setActive] = useState('home')
  const { count } = useCart()
  const { wishlist } = useWishlist()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden" style={{backgroundColor: '#FAF8F5', borderTop: '1px solid #E8C97A'}}>
      <div className="flex justify-around items-center py-2">

        <Link to="/" onClick={() => setActive('home')} className="flex flex-col items-center gap-1 px-3 py-1" style={{color: active === 'home' ? '#6B1A2A' : '#6B1A2A66'}}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
          </svg>
          <span className="text-xs font-medium">Home</span>
          {active === 'home' && <div className="w-1 h-1 rounded-full" style={{backgroundColor: '#E8C97A'}}></div>}
        </Link>

        <Link to="/products" onClick={() => setActive('categories')} className="flex flex-col items-center gap-1 px-3 py-1" style={{color: active === 'categories' ? '#6B1A2A' : '#6B1A2A66'}}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
          </svg>
          <span className="text-xs font-medium">Categories</span>
          {active === 'categories' && <div className="w-1 h-1 rounded-full" style={{backgroundColor: '#E8C97A'}}></div>}
        </Link>

        <Link to="/wishlist" onClick={() => setActive('wishlist')} className="flex flex-col items-center gap-1 px-3 py-1 relative" style={{color: active === 'wishlist' ? '#6B1A2A' : '#6B1A2A66'}}>
          <div className="relative">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
            </svg>
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold" style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}>
                {wishlist.length}
              </span>
            )}
          </div>
          <span className="text-xs font-medium">Wishlist</span>
          {active === 'wishlist' && <div className="w-1 h-1 rounded-full" style={{backgroundColor: '#E8C97A'}}></div>}
        </Link>

        <Link to="/cart" onClick={() => setActive('bag')} className="flex flex-col items-center gap-1 px-3 py-1" style={{color: active === 'bag' ? '#6B1A2A' : '#6B1A2A66'}}>
          <div className="relative">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/>
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold" style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}>
                {count}
              </span>
            )}
          </div>
          <span className="text-xs font-medium">Bag</span>
          {active === 'bag' && <div className="w-1 h-1 rounded-full" style={{backgroundColor: '#E8C97A'}}></div>}
        </Link>

        <Link to="/profile" onClick={() => setActive('profile')} className="flex flex-col items-center gap-1 px-3 py-1" style={{color: active === 'profile' ? '#6B1A2A' : '#6B1A2A66'}}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
          </svg>
          <span className="text-xs font-medium">Profile</span>
          {active === 'profile' && <div className="w-1 h-1 rounded-full" style={{backgroundColor: '#E8C97A'}}></div>}
        </Link>

      </div>
    </div>
  )
}