import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

const products = [
  { id: 1, name: 'Diamond Ring', category: 'Rings', price: 299, rating: 5, reviews: 128, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80' },
  { id: 2, name: 'Gold Necklace', category: 'Necklaces', price: 199, rating: 4, reviews: 96, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
  { id: 3, name: 'Pearl Earrings', category: 'Earrings', price: 149, rating: 4, reviews: 74, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { id: 4, name: 'Gold Bracelet', category: 'Bracelets', price: 249, rating: 4, reviews: 68, img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
  { id: 5, name: 'Rose Pendant', category: 'Necklaces', price: 179, rating: 5, reviews: 112, img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80' },
]

export default function FeaturedProducts() {
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()

  return (
    <div className="py-16 px-8" style={{backgroundColor: '#FAF8F5'}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] mb-2" style={{color: '#E8C97A'}}>OUR FAVORITE PICKS</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: '#1a1a1a'}}>Explore Our Most Loved Pieces</h2>
          </div>
          <Link to="/products" className="px-5 py-2 text-sm font-semibold border transition-all duration-200 hover:opacity-70" style={{borderColor: '#6B1A2A', color: '#6B1A2A'}}>
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-4" style={{backgroundColor: '#f0ebe3'}}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.img} alt={product.name} className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-105"/>
                </Link>
                <button
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{backgroundColor: 'white'}}
                >
                  <svg width="16" height="16" fill={isWishlisted(product.id) ? '#6B1A2A' : 'none'} viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                </button>
                <div onClick={() => addToCart(product)} className="absolute bottom-0 left-0 right-0 py-3 text-center text-sm font-bold translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer" style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}>
                  Add to Cart
                </div>
              </div>
              <Link to={`/product/${product.id}`}>
                <p className="font-bold text-sm mb-1" style={{color: '#1a1a1a'}}>{product.name}</p>
                <p className="text-xs mb-2" style={{color: '#6B1A2A', opacity: 0.7}}>{product.category}</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < product.rating ? '#E8C97A' : 'none'} stroke="#E8C97A" strokeWidth={1.5}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                  <span className="text-xs" style={{color: '#1a1a1a', opacity: 0.5}}>({product.reviews})</span>
                </div>
                <p className="font-bold text-base" style={{color: '#6B1A2A'}}>${product.price}.00</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}