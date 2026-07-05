import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const { cart, removeFromCart, updateQty, total } = useCart()

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      {/* Header */}
      <div className="py-12 px-8 text-center" style={{backgroundColor: '#6B1A2A'}}>
        <p className="text-xs tracking-[0.3em] mb-2" style={{color: '#E8C97A'}}>YOUR</p>
        <h1 className="text-4xl font-bold text-white">Shopping Cart</h1>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1} className="mx-auto mb-4" style={{opacity: 0.3}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/>
            </svg>
            <p className="text-xl font-bold mb-2" style={{color: '#6B1A2A'}}>Your cart is empty</p>
            <p className="text-sm mb-6" style={{color: 'rgba(0,0,0,0.5)'}}>Add some beautiful pieces to your cart</p>
            <a href="/products" className="px-8 py-4 rounded-full font-bold text-sm" style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}>
              Shop Now
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-6">

            {/* Items */}
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-6 p-4 rounded-2xl" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
                <img src={item.img} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <p className="font-bold text-sm mb-1" style={{color: '#1a1a1a'}}>{item.name}</p>
                  <p className="text-xs mb-2" style={{color: '#6B1A2A', opacity: 0.7}}>{item.category}</p>
                  <p className="font-bold" style={{color: '#6B1A2A'}}>${item.price}.00</p>
                </div>
                {/* Qty */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                    style={{border: '1px solid rgba(107,26,42,0.2)', color: '#6B1A2A'}}
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-bold" style={{color: '#6B1A2A'}}>{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                    style={{border: '1px solid rgba(107,26,42,0.2)', color: '#6B1A2A'}}
                  >
                    +
                  </button>
                </div>
                {/* Total */}
                <p className="font-bold w-20 text-right" style={{color: '#6B1A2A'}}>${item.price * item.qty}.00</p>
                {/* Remove */}
                <button onClick={() => removeFromCart(item.id)} style={{color: 'rgba(107,26,42,0.4)'}}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between items-center p-6 rounded-2xl mt-4" style={{backgroundColor: '#6B1A2A'}}>
              <p className="font-bold text-white text-lg">Total</p>
              <p className="font-bold text-2xl" style={{color: '#E8C97A'}}>${total}.00</p>
            </div>

            {/* Checkout */}
           <Link to="/checkout" className="w-full py-4 rounded-full font-bold text-base tracking-wide text-center transition-all duration-300 hover:scale-105 block" style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}>
  Proceed to Checkout →
</Link>

          </div>
        )}
      </div>
    </div>
  )
}