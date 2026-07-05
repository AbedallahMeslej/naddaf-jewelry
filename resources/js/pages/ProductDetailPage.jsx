import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useState } from 'react'

const allProducts = [
  { id: 1, name: 'Classic Gold Ring', category: 'Rings', price: 189, rating: 5, reviews: 214, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', description: 'A timeless classic gold ring crafted with the finest materials. Perfect for any occasion.' },
  { id: 2, name: 'Diamond Necklace', category: 'Necklaces', price: 349, rating: 5, reviews: 186, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', description: 'Exquisite diamond necklace that adds a touch of luxury to any outfit.' },
  { id: 3, name: 'Pearl Earrings', category: 'Earrings', price: 129, rating: 4, reviews: 74, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', description: 'Elegant pearl earrings that bring sophistication to your look.' },
  { id: 4, name: 'Gold Bracelet', category: 'Bracelets', price: 229, rating: 4, reviews: 98, img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80', description: 'A beautiful gold bracelet that complements any style.' },
  { id: 5, name: 'Rose Gold Pendant', category: 'Necklaces', price: 159, rating: 5, reviews: 112, img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80', description: 'A stunning rose gold pendant that adds a romantic touch.' },
  { id: 6, name: 'Sapphire Ring', category: 'Rings', price: 319, rating: 5, reviews: 67, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', description: 'A magnificent sapphire ring featuring a stunning blue gemstone.' },
  { id: 7, name: 'Gold Keychain', category: 'Keychains', price: 79, rating: 4, reviews: 43, img: 'https://images.unsplash.com/photo-1573408301185-9519f94816f7?w=400&q=80', description: 'A premium gold keychain that makes a perfect gift.' },
  { id: 8, name: 'Luxury Watch', category: 'Watches', price: 599, rating: 5, reviews: 88, img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80', description: 'An exceptional luxury watch combining precision with elegant design.' },
  { id: 9, name: 'Diamond Set', category: 'Sets', price: 899, rating: 5, reviews: 34, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', description: 'A complete diamond jewelry set including necklace, earrings, and bracelet.' },
  { id: 10, name: 'Rose Gold Pendant', category: 'Necklaces', price: 159, rating: 4, reviews: 167, img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80', description: 'A stunning rose gold pendant crafted with care.' },
  { id: 11, name: 'Sapphire Ring', category: 'Rings', price: 319, rating: 5, reviews: 67, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', description: 'A magnificent sapphire ring with stunning blue gemstone.' },
  { id: 12, name: 'Pearl Necklace', category: 'Necklaces', price: 259, rating: 4, reviews: 54, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', description: 'A beautiful pearl necklace that adds elegance to any outfit.' },
  { id: 13, name: 'Diamond Earrings', category: 'Earrings', price: 189, rating: 5, reviews: 89, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', description: 'Stunning diamond earrings that catch the light beautifully.' },
  { id: 14, name: 'Gold Chain', category: 'Necklaces', price: 279, rating: 4, reviews: 76, img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80', description: 'A classic gold chain that never goes out of style.' },
]

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const [added, setAdded] = useState(false)
  const [qty, setQty] = useState(1)
  const navigate = useNavigate()

  const product = allProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FAF8F5'}}>
        <div className="text-center">
          <p className="text-xl font-bold mb-4" style={{color: '#6B1A2A'}}>Product not found</p>
          <Link to="/products" className="px-6 py-3 rounded-full font-bold text-sm" style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}>
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    for (let i = 0; i < qty; i++) addToCart(product)
    navigate('/checkout')
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      {/* Breadcrumb */}
      <div className="px-8 py-4 flex items-center gap-2 text-xs" style={{color: 'rgba(0,0,0,0.5)'}}>
        <Link to="/" style={{color: '#6B1A2A'}}>Home</Link>
        <span>/</span>
        <Link to="/products" style={{color: '#6B1A2A'}}>Products</Link>
        <span>/</span>
        <Link to={`/products/${product.category}`} style={{color: '#6B1A2A'}}>{product.category}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col md:flex-row gap-12">

        {/* Left — Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden" style={{backgroundColor: '#f0ebe3'}}>
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Right — Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">

          <div>
            <p className="text-xs font-bold tracking-widest mb-2" style={{color: '#E8C97A'}}>{product.category.toUpperCase()}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#1a1a1a'}}>{product.name}</h1>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < product.rating ? '#E8C97A' : 'none'} stroke="#E8C97A" strokeWidth={1.5}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>({product.reviews} reviews)</span>
            </div>

            <p className="text-3xl font-bold mb-2" style={{color: '#6B1A2A'}}>${product.price}.00</p>
          </div>

          <p className="text-sm leading-relaxed" style={{color: 'rgba(0,0,0,0.6)'}}>{product.description}</p>

          {/* Features */}
          <div className="flex flex-col gap-2">
            {['100% Authentic Materials', 'Handcrafted with Care', 'Lebanon Delivery $4', '7-Day Easy Returns'].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm" style={{color: '#1a1a1a'}}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                {f}
              </div>
            ))}
          </div>

          {/* Qty */}
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold" style={{color: '#6B1A2A'}}>Quantity:</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                style={{border: '1px solid rgba(107,26,42,0.2)', color: '#6B1A2A'}}
              >
                -
              </button>
              <span className="font-bold w-6 text-center" style={{color: '#6B1A2A'}}>{qty}</span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                style={{border: '1px solid rgba(107,26,42,0.2)', color: '#6B1A2A'}}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
              style={{backgroundColor: added ? '#4a1020' : '#6B1A2A', color: '#FAF8F5'}}
            >
              {added ? '✓ Added!' : 'Add to Cart'}
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#E8C97A', color: '#6B1A2A'}}
            >
              Buy Now
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{border: '1.5px solid #6B1A2A'}}
            >
              <svg width="20" height="20" fill={isWishlisted(product.id) ? '#6B1A2A' : 'none'} viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
              </svg>
            </button>
          </div>

          {/* Delivery */}
          <div className="rounded-2xl p-4 flex items-center gap-3" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.08)'}}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H3m13.5 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H9m10.125-9H3.375c-.621 0-1.125.504-1.125 1.125v4.5c0 .621.504 1.125 1.125 1.125h16.5c.621 0 1.125-.504 1.125-1.125v-4.5c0-.621-.504-1.125-1.125-1.125z"/>
            </svg>
            <div>
              <p className="text-sm font-bold" style={{color: '#6B1A2A'}}>Cash on Delivery</p>
              <p className="text-xs" style={{color: 'rgba(0,0,0,0.5)'}}>Delivery $4 — All over Lebanon Safe Areas Only</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}