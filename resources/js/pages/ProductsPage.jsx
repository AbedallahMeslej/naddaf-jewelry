import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

const allProducts = [
  { id: 1, name: 'Classic Gold Ring', category: 'Rings', price: 189, rating: 5, reviews: 214, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80' },
  { id: 2, name: 'Diamond Necklace', category: 'Necklaces', price: 349, rating: 5, reviews: 186, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
  { id: 3, name: 'Pearl Earrings', category: 'Earrings', price: 129, rating: 4, reviews: 74, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { id: 4, name: 'Gold Bracelet', category: 'Bracelets', price: 229, rating: 4, reviews: 98, img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
  { id: 5, name: 'Rose Gold Pendant', category: 'Necklaces', price: 159, rating: 5, reviews: 112, img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80' },
  { id: 6, name: 'Sapphire Ring', category: 'Rings', price: 319, rating: 5, reviews: 67, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80' },
  { id: 7, name: 'Gold Keychain', category: 'Keychains', price: 79, rating: 4, reviews: 43, img: 'https://images.unsplash.com/photo-1573408301185-9519f94816f7?w=400&q=80' },
  { id: 8, name: 'Luxury Watch', category: 'Watches', price: 599, rating: 5, reviews: 88, img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80' },
  { id: 9, name: 'Diamond Set', category: 'Sets', price: 899, rating: 5, reviews: 34, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
]

const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Keychains', 'Watches', 'Sets']

export default function ProductsPage() {
  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(category || 'All')
  const [priceRange, setPriceRange] = useState(1000)
  const [sortBy, setSortBy] = useState('default')
  const [filterOpen, setFilterOpen] = useState(false)
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()

  useEffect(() => {
    setSelectedCategory(category || 'All')
  }, [category])

  const filtered = allProducts
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => p.price <= priceRange)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="font-bold text-sm tracking-widest mb-4" style={{color: '#6B1A2A'}}>CATEGORIES</h3>
        <div className="flex flex-col gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setFilterOpen(false) }}
              className="text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: selectedCategory === cat ? '#6B1A2A' : 'transparent',
                color: selectedCategory === cat ? '#FAF8F5' : '#6B1A2A',
                border: '1px solid rgba(107,26,42,0.2)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-sm tracking-widest mb-4" style={{color: '#6B1A2A'}}>PRICE RANGE</h3>
        <input
          type="range"
          min="50"
          max="1000"
          value={priceRange}
          onChange={e => setPriceRange(Number(e.target.value))}
          className="w-full"
          style={{accentColor: '#6B1A2A'}}
        />
        <div className="flex justify-between text-xs mt-2" style={{color: '#6B1A2A'}}>
          <span>$50</span>
          <span className="font-bold">${priceRange}</span>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-sm tracking-widest mb-4" style={{color: '#6B1A2A'}}>SORT BY</h3>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-sm border outline-none"
          style={{borderColor: 'rgba(107,26,42,0.2)', color: '#6B1A2A', backgroundColor: '#FAF8F5'}}
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      <div className="py-12 px-8 text-center" style={{backgroundColor: '#6B1A2A'}}>
        <p className="text-xs tracking-[0.3em] mb-2" style={{color: '#E8C97A'}}>EXPLORE</p>
        <h1 className="text-4xl font-bold text-white">
          {selectedCategory === 'All' ? 'Our Collection' : selectedCategory}
        </h1>
      </div>

      <div className="md:hidden px-4 py-3 flex justify-between items-center" style={{borderBottom: '1px solid rgba(107,26,42,0.1)'}}>
        <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>
          <span className="font-bold" style={{color: '#6B1A2A'}}>{filtered.length}</span> products
        </p>
        <button
          onClick={() => setFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
          style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
          </svg>
          Filter
        </button>
      </div>

      {filterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setFilterOpen(false)}></div>
          <div className="absolute bottom-0 left-0 right-0 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto" style={{backgroundColor: '#FAF8F5'}}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg" style={{color: '#6B1A2A'}}>Filter & Sort</h2>
              <button onClick={() => setFilterOpen(false)} style={{color: '#6B1A2A'}}>✕</button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-8 py-12 flex gap-8">

        <div className="hidden md:flex flex-col gap-8 w-64 flex-shrink-0">
          <FilterContent />
        </div>

        <div className="flex-1">
          <div className="hidden md:flex items-center justify-between mb-6">
            <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>
              Showing <span className="font-bold" style={{color: '#6B1A2A'}}>{filtered.length}</span> products
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-bold" style={{color: '#6B1A2A'}}>No products found</p>
              <p className="text-sm mt-2" style={{color: 'rgba(0,0,0,0.5)'}}>Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map(product => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden mb-4" style={{backgroundColor: '#f0ebe3'}}>
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
                      />
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
                    <div
                      onClick={() => addToCart(product)}
                      className="absolute bottom-0 left-0 right-0 py-3 text-center text-sm font-bold translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                      style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
                    >
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
                      <span className="text-xs" style={{color: 'rgba(0,0,0,0.5)'}}>({product.reviews})</span>
                    </div>
                    <p className="font-bold text-base" style={{color: '#6B1A2A'}}>${product.price}.00</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}