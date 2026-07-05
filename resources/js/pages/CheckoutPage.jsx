import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate, Link } from 'react-router-dom'

export default function CheckoutPage() {
  const { cart, total } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    address2: '',
    note: '',
  })

  const [errors, setErrors] = useState({})
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderNum, setOrderNum] = useState('')

  const delivery = 4
  const grandTotal = total + delivery

  const validate = () => {
    const newErrors = {}
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^(\+961|0)?[0-9]{8}$/.test(form.phone.replace(/\s/g, ''))) newErrors.phone = 'Enter a valid Lebanese number'
    if (!form.address.trim()) newErrors.address = 'Address is required'
    return newErrors
  }

  const handleSubmit = async () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
        },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          phone: form.phone,
          address: form.address,
          address2: form.address2,
          note: form.note,
          items: cart.map(item => ({
            name: item.name,
            qty: item.qty,
            price: item.price,
          })),
          total: grandTotal,
          delivery: delivery,
        }),
      })

      const data = await response.json()

      if (data.success) {
        const orderNumber = data.order_number
       
       

        setOrderNum(orderNumber)
        setOrderPlaced(true)
        setTimeout(() => navigate('/'), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
        <div className="rounded-3xl p-10 flex flex-col items-center gap-5 text-center mx-4 w-full max-w-sm" style={{backgroundColor: '#FAF8F5'}}>

          {/* Icon */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{backgroundColor: '#6B1A2A'}}>
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold" style={{color: '#6B1A2A'}}>شكراً لثقتك بنا! 💎</h2>
            <p className="text-base font-medium" style={{color: '#1a1a1a'}}>Thank You for Choosing Naddaf Jewelry</p>
            <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>Your order has been placed successfully. We will contact you soon!</p>
          </div>

          {/* Order Number */}
          <div className="w-full px-6 py-4 rounded-2xl" style={{backgroundColor: 'rgba(107,26,42,0.06)', border: '1px solid rgba(107,26,42,0.1)'}}>
            <p className="text-xs font-bold tracking-widest mb-2" style={{color: 'rgba(0,0,0,0.4)'}}>YOUR ORDER NUMBER</p>
            <p className="text-3xl font-bold" style={{color: '#6B1A2A'}}>{orderNum}</p>
            <p className="text-xs mt-2" style={{color: 'rgba(0,0,0,0.4)'}}>Save this number to track your order</p>
          </div>

          {/* Track Button */}
          <Link
            to="/track-order"
            className="w-full py-3 rounded-full font-bold text-sm text-center transition-all duration-300 hover:scale-105"
            style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
          >
            Track My Order
          </Link>

          {/* Loading dots */}
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#E8C97A', animationDelay: `${i * 0.2}s`}}></div>
            ))}
          </div>
          <p className="text-xs" style={{color: 'rgba(0,0,0,0.4)'}}>Redirecting to home page in 5 seconds...</p>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      <div className="py-12 px-8 text-center" style={{backgroundColor: '#6B1A2A'}}>
        <p className="text-xs tracking-[0.3em] mb-2" style={{color: '#E8C97A'}}>ALMOST THERE</p>
        <h1 className="text-4xl font-bold text-white">Checkout</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-8">

        <div className="flex-1 flex flex-col gap-6">

          <h2 className="text-xl font-bold" style={{color: '#6B1A2A'}}>Delivery Information</h2>

          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>
                FIRST NAME <span style={{color: 'red'}}>*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                value={form.firstName}
                onChange={e => setForm({...form, firstName: e.target.value})}
                className="px-4 py-3 rounded-xl text-sm outline-none border"
                style={{borderColor: errors.firstName ? 'red' : 'rgba(107,26,42,0.2)', backgroundColor: 'white', color: '#1a1a1a'}}
              />
              {errors.firstName && <p className="text-xs" style={{color: 'red'}}>{errors.firstName}</p>}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>
                LAST NAME <span style={{color: 'rgba(107,26,42,0.4)'}}>( optional )</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                value={form.lastName}
                onChange={e => setForm({...form, lastName: e.target.value})}
                className="px-4 py-3 rounded-xl text-sm outline-none border"
                style={{borderColor: 'rgba(107,26,42,0.2)', backgroundColor: 'white', color: '#1a1a1a'}}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>
              PHONE NUMBER <span style={{color: 'red'}}>*</span>
            </label>
            <input
              type="tel"
              placeholder="03 123 456"
              value={form.phone}
              onChange={e => setForm({...form, phone: e.target.value})}
              className="px-4 py-3 rounded-xl text-sm outline-none border"
              style={{borderColor: errors.phone ? 'red' : 'rgba(107,26,42,0.2)', backgroundColor: 'white', color: '#1a1a1a'}}
            />
            {errors.phone && <p className="text-xs" style={{color: 'red'}}>{errors.phone}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>
              ADDRESS <span style={{color: 'red'}}>*</span>
            </label>
            <input
              type="text"
              placeholder="Street, Building, Floor..."
              value={form.address}
              onChange={e => setForm({...form, address: e.target.value})}
              className="px-4 py-3 rounded-xl text-sm outline-none border"
              style={{borderColor: errors.address ? 'red' : 'rgba(107,26,42,0.2)', backgroundColor: 'white', color: '#1a1a1a'}}
            />
            {errors.address && <p className="text-xs" style={{color: 'red'}}>{errors.address}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>
              ADDRESS 2 <span style={{color: 'rgba(107,26,42,0.4)'}}>( optional )</span>
            </label>
            <input
              type="text"
              placeholder="Apartment, Suite, Area..."
              value={form.address2}
              onChange={e => setForm({...form, address2: e.target.value})}
              className="px-4 py-3 rounded-xl text-sm outline-none border"
              style={{borderColor: 'rgba(107,26,42,0.2)', backgroundColor: 'white', color: '#1a1a1a'}}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>
              NOTE <span style={{color: 'rgba(107,26,42,0.4)'}}>( optional )</span>
            </label>
            <textarea
              placeholder="Any special instructions..."
              value={form.note}
              onChange={e => setForm({...form, note: e.target.value})}
              rows={3}
              className="px-4 py-3 rounded-xl text-sm outline-none border resize-none"
              style={{borderColor: 'rgba(107,26,42,0.2)', backgroundColor: 'white', color: '#1a1a1a'}}
            />
          </div>

          <div className="rounded-2xl p-5 flex items-center gap-4" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.1)'}}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#6B1A2A'}}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm" style={{color: '#6B1A2A'}}>Cash on Delivery</p>
              <p className="text-xs mt-1" style={{color: 'rgba(0,0,0,0.5)'}}>Available all over Lebanon — Safe Areas Only</p>
            </div>
          </div>

        </div>

        <div className="w-full md:w-96 flex flex-col gap-4">

          <h2 className="text-xl font-bold" style={{color: '#6B1A2A'}}>Order Summary</h2>

          <div className="rounded-2xl p-6 flex flex-col gap-4" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-3">
                <img src={item.img} alt={item.name} className="w-14 h-14 rounded-xl object-cover"/>
                <div className="flex-1">
                  <p className="font-bold text-sm" style={{color: '#1a1a1a'}}>{item.name}</p>
                  <p className="text-xs" style={{color: 'rgba(0,0,0,0.5)'}}>Qty: {item.qty}</p>
                </div>
                <p className="font-bold text-sm" style={{color: '#6B1A2A'}}>${item.price * item.qty}.00</p>
              </div>
            ))}

            <div className="border-t pt-4 flex flex-col gap-2" style={{borderColor: 'rgba(107,26,42,0.1)'}}>
              <div className="flex justify-between text-sm">
                <span style={{color: 'rgba(0,0,0,0.5)'}}>Subtotal</span>
                <span className="font-bold" style={{color: '#1a1a1a'}}>${total}.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{color: 'rgba(0,0,0,0.5)'}}>Delivery</span>
                <span className="font-bold" style={{color: '#1a1a1a'}}>${delivery}.00</span>
              </div>
              <div className="flex justify-between text-base font-bold mt-2">
                <span style={{color: '#6B1A2A'}}>Total</span>
                <span style={{color: '#6B1A2A'}}>${grandTotal}.00</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 hover:scale-105"
            style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
          >
            Place Order →
          </button>

          <p className="text-xs text-center" style={{color: 'rgba(0,0,0,0.4)'}}>
            By placing your order you agree to our terms & conditions
          </p>

        </div>

      </div>
    </div>
  )
}