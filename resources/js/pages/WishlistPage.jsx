import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      {/* Header */}
      <div className="py-12 px-8 text-center" style={{backgroundColor: '#6B1A2A'}}>
        <p className="text-xs tracking-[0.3em] mb-2" style={{color: '#E8C97A'}}>YOUR</p>
        <h1 className="text-4xl font-bold text-white">Wishlist</h1>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1} className="mx-auto mb-4" style={{opacity: 0.3}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
            </svg>
            <p className="text-xl font-bold mb-2" style={{color: '#6B1A2A'}}>Your wishlist is empty</p>
            <p className="text-sm mb-6" style={{color: 'rgba(0,0,0,0.5)'}}>Save your favorite pieces here</p>
            <Link to="/products" className="px-8 py-4 rounded-full font-bold text-sm" style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}>
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {wishlist.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4" style={{backgroundColor: '#f0ebe3'}}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Remove from Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{backgroundColor: 'white'}}
                  >
                    <svg width="16" height="16" fill="#6B1A2A" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                    </svg>
                  </button>
                  {/* Add to Cart */}
                  <div
                    onClick={() => addToCart(product)}
                    className="absolute bottom-0 left-0 right-0 py-3 text-center text-sm font-bold translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                    style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
                  >
                    Add to Cart
                  </div>
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{color: '#1a1a1a'}}>{product.name}</p>
                  <p className="text-xs mb-2" style={{color: '#6B1A2A', opacity: 0.7}}>{product.category}</p>
                  <p className="font-bold text-base" style={{color: '#6B1A2A'}}>${product.price}.00</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}