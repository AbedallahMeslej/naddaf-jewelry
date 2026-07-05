import { useState } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  { key: 'placed', label: 'Order Placed', desc: 'Your order has been received' },
  { key: 'preparing', label: 'Being Prepared', desc: 'Our team is crafting your order' },
  { key: 'out_for_delivery', label: 'Out for Delivery', desc: 'Your order is on its way' },
  { key: 'delivered', label: 'Delivered', desc: 'Your order has been delivered' },
]

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [order, setOrder] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleTrack = async () => {
    if (!orderNumber.trim()) return
    setLoading(true)
    setError(false)
    setOrder(null)

    try {
      const response = await fetch(`/api/orders/${orderNumber}`)
      const data = await response.json()

      if (data.success) {
        setOrder(data.order)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const getStepIndex = (status) => steps.findIndex(s => s.key === status)

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      <div className="py-20 px-8 text-center" style={{backgroundColor: '#6B1A2A'}}>
        <p className="text-xs tracking-[0.3em] mb-3" style={{color: '#E8C97A'}}>TRACK YOUR ORDER</p>
        <h1 className="text-5xl font-bold text-white mb-4">Order Tracking</h1>
        <p className="text-base max-w-xl mx-auto" style={{color: 'rgba(255,255,255,0.7)'}}>
          Enter your order number to track your delivery status.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-12 flex flex-col gap-6">

        {/* Search */}
        <div className="p-8 rounded-3xl" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
          <h2 className="text-xl font-bold mb-6" style={{color: '#1a1a1a'}}>Enter Your Order Number</h2>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="e.g. NAD-4440"
              value={orderNumber}
              onChange={e => setOrderNumber(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleTrack()}
              className="flex-1 px-4 py-3 rounded-xl text-sm outline-none border"
              style={{borderColor: 'rgba(107,26,42,0.2)', color: '#1a1a1a'}}
            />
            <button
              onClick={handleTrack}
              disabled={loading}
              className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
            >
              {loading ? '...' : 'Track'}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 rounded-xl flex items-center gap-3" style={{backgroundColor: 'rgba(220,38,38,0.08)'}}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
              </svg>
              <p className="text-sm font-medium" style={{color: '#dc2626'}}>Order not found. Please check your order number.</p>
            </div>
          )}
        </div>

        {/* Order Details */}
        {order && (
          <div className="flex flex-col gap-6">

            <div className="p-6 rounded-3xl" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs font-bold tracking-widest mb-1" style={{color: '#E8C97A'}}>ORDER NUMBER</p>
                  <p className="text-2xl font-bold" style={{color: '#6B1A2A'}}>{order.order_number}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold tracking-widest mb-1" style={{color: 'rgba(0,0,0,0.4)'}}>DATE</p>
                  <p className="text-sm font-medium" style={{color: '#1a1a1a'}}>{order.created_at}</p>
                </div>
              </div>
              <div className="pt-4" style={{borderTop: '1px solid rgba(107,26,42,0.1)'}}>
                <p className="text-xs font-bold tracking-widest mb-2" style={{color: 'rgba(0,0,0,0.4)'}}>ITEMS</p>
                {order.items.map((item, i) => (
                  <p key={i} className="text-sm mb-1" style={{color: '#1a1a1a'}}>• {item.name} x{item.qty} — ${item.price * item.qty}</p>
                ))}
                <p className="font-bold mt-3" style={{color: '#6B1A2A'}}>Total: ${order.total}</p>
              </div>
            </div>

            {/* Tracking Steps */}
            <div className="p-6 rounded-3xl" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
              <p className="text-xs font-bold tracking-widest mb-6" style={{color: '#E8C97A'}}>TRACKING STATUS</p>
              <div className="flex flex-col gap-0">
                {steps.map((step, index) => {
                  const currentIndex = getStepIndex(order.status)
                  const isDone = index <= currentIndex
                  const isCurrent = index === currentIndex

                  return (
                    <div key={step.key} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: isDone ? '#6B1A2A' : 'rgba(107,26,42,0.08)',
                            border: isCurrent ? '2px solid #E8C97A' : 'none'
                          }}
                        >
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={isDone ? 'white' : 'rgba(107,26,42,0.3)'} strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                          </svg>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="w-0.5 h-8 mt-1" style={{backgroundColor: isDone && index < currentIndex ? '#6B1A2A' : 'rgba(107,26,42,0.1)'}}></div>
                        )}
                      </div>
                      <div className="pb-8 flex-1">
                        <p className="font-bold text-sm" style={{color: isDone ? '#1a1a1a' : 'rgba(0,0,0,0.3)'}}>{step.label}</p>
                        <p className="text-xs mt-0.5" style={{color: isDone ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)'}}>{step.desc}</p>
                        {isCurrent && (
                          <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold" style={{backgroundColor: '#E8C97A', color: '#6B1A2A'}}>
                            Current Status
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Help */}
            <div className="p-6 rounded-3xl text-center" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.08)'}}>
              <p className="font-bold mb-2" style={{color: '#1a1a1a'}}>Need Help?</p>
              
            <a    href={`https://wa.me/96171937469?text=Hi! I need help with my order ${order.order_number}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm mt-2"
                style={{backgroundColor: '#25D366', color: 'white'}}
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}