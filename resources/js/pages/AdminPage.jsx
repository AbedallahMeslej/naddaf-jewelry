import { useState, useEffect } from 'react'

const STATUS_LABELS = {
  placed: { label: 'Order Placed', color: '#E8C97A', bg: 'rgba(232,201,122,0.15)' },
  preparing: { label: 'Being Prepared', color: '#3B82F6', bg: 'rgba(59,130,246,0.15)' },
  out_for_delivery: { label: 'Out for Delivery', color: '#F97316', bg: 'rgba(249,115,22,0.15)' },
  delivered: { label: 'Delivered', color: '#22C55E', bg: 'rgba(34,197,94,0.15)' },
}

export default function AdminPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [filterStatus, setFilterStatus] = useState('all')

  const ADMIN_PASSWORD = 'naddaf2025'

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
    } else {
      alert('Wrong password!')
    }
  }

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/admin/orders')
      const data = await response.json()
      setOrders(data.orders)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (authenticated) {
      fetchOrders()
      const interval = setInterval(fetchOrders, 30000)
      return () => clearInterval(interval)
    }
  }, [authenticated])

  const updateStatus = async (orderNumber, status) => {
    try {
      await fetch(`/api/orders/${orderNumber}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
        },
        body: JSON.stringify({ status }),
      })
      fetchOrders()
    } catch (error) {
      console.error(error)
    }
  }

  const deleteOrder = async (orderNumber) => {
    if (!confirm(`Delete order ${orderNumber}?`)) return
    try {
      await fetch(`/api/orders/${orderNumber}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
        },
      })
      fetchOrders()
    } catch (error) {
      console.error(error)
    }
  }

  const filtered = filterStatus === 'all' ? orders : orders.filter(o => o.status === filterStatus)

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FAF8F5'}}>
        <div className="p-10 rounded-3xl w-full max-w-sm flex flex-col gap-6" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
          <div className="text-center">
            <p className="text-xs font-bold tracking-widest mb-2" style={{color: '#E8C97A'}}>NADDAF JEWELRY</p>
            <h1 className="text-2xl font-bold" style={{color: '#6B1A2A'}}>Admin Panel</h1>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              className="px-4 py-3 rounded-xl text-sm outline-none border"
              style={{borderColor: 'rgba(107,26,42,0.2)', color: '#1a1a1a'}}
            />
            <button
              onClick={handleLogin}
              className="py-3 rounded-full font-bold text-sm"
              style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      <div className="py-8 px-8 flex items-center justify-between" style={{backgroundColor: '#6B1A2A'}}>
        <div>
          <p className="text-xs tracking-widest mb-1" style={{color: '#E8C97A'}}>NADDAF JEWELRY</p>
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>
            {orders.length} Total Orders
          </span>
          <button
            onClick={fetchOrders}
            className="px-4 py-2 rounded-full text-xs font-bold"
            style={{backgroundColor: 'rgba(232,201,122,0.2)', color: '#E8C97A'}}
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(STATUS_LABELS).map(([key, val]) => (
            <div key={key} className="p-4 rounded-2xl text-center" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
              <p className="text-2xl font-bold mb-1" style={{color: val.color}}>
                {orders.filter(o => o.status === key).length}
              </p>
              <p className="text-xs" style={{color: 'rgba(0,0,0,0.5)'}}>{val.label}</p>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {[
            { key: 'all', label: 'All' },
            ...Object.entries(STATUS_LABELS).map(([key, val]) => ({ key, label: val.label }))
          ].map(item => (
            <button
              key={item.key}
              onClick={() => setFilterStatus(item.key)}
              className="px-4 py-2 rounded-full text-xs font-bold transition-all"
              style={{
                backgroundColor: filterStatus === item.key ? '#6B1A2A' : 'rgba(107,26,42,0.06)',
                color: filterStatus === item.key ? '#FAF8F5' : '#6B1A2A'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Orders */}
        {loading ? (
          <div className="text-center py-20" style={{color: '#6B1A2A'}}>Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20" style={{color: 'rgba(0,0,0,0.4)'}}>No orders found</div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map(order => (
              <div key={order.id} className="p-6 rounded-2xl" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
                <div className="flex items-start justify-between gap-4 flex-wrap">

                  {/* Order Info */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-lg" style={{color: '#6B1A2A'}}>{order.order_number}</p>
                      <span className="px-3 py-1 rounded-full text-xs font-bold" style={{
                        backgroundColor: STATUS_LABELS[order.status]?.bg,
                        color: STATUS_LABELS[order.status]?.color
                      }}>
                        {STATUS_LABELS[order.status]?.label}
                      </span>
                    </div>
                    <p className="text-sm font-medium" style={{color: '#1a1a1a'}}>{order.first_name} {order.last_name}</p>
                    <p className="text-xs" style={{color: 'rgba(0,0,0,0.5)'}}>📞 {order.phone}</p>
                    <p className="text-xs" style={{color: 'rgba(0,0,0,0.5)'}}>📍 {order.address}{order.address2 ? ', ' + order.address2 : ''}</p>
                    {order.note && <p className="text-xs" style={{color: 'rgba(0,0,0,0.5)'}}>📝 {order.note}</p>}
                    <p className="text-xs mt-1" style={{color: 'rgba(0,0,0,0.4)'}}>{order.created_at}</p>
                  </div>

                  {/* Items + Total */}
                  <div className="flex flex-col gap-1">
                    {order.items.map((item, i) => (
                      <p key={i} className="text-xs" style={{color: 'rgba(0,0,0,0.6)'}}>• {item.name} x{item.qty}</p>
                    ))}
                    <p className="font-bold mt-2" style={{color: '#6B1A2A'}}>Total: ${order.total}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-bold tracking-widest" style={{color: 'rgba(0,0,0,0.4)'}}>UPDATE STATUS</p>
                    {Object.entries(STATUS_LABELS).map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => updateStatus(order.order_number, key)}
                        className="px-4 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105"
                        style={{
                          backgroundColor: order.status === key ? val.bg : 'rgba(107,26,42,0.04)',
                          color: order.status === key ? val.color : 'rgba(0,0,0,0.4)',
                          border: `1px solid ${order.status === key ? val.color : 'rgba(107,26,42,0.1)'}`
                        }}
                      >
                        {val.label}
                      </button>
                    ))}

                    
                    <a  href={`https://wa.me/961${order.phone.replace(/^0/, '')}?text=Hi ${order.first_name}! Your order *${order.order_number}* status: *${STATUS_LABELS[order.status]?.label}* 💎`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-center transition-all hover:scale-105 mt-1"
                      style={{backgroundColor: '#25D366', color: 'white'}}
                    >
                      Notify Customer
                    </a>

                    <button
                      onClick={() => deleteOrder(order.order_number)}
                      className="px-4 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105"
                      style={{backgroundColor: 'rgba(220,38,38,0.08)', color: '#dc2626', border: '1px solid rgba(220,38,38,0.2)'}}
                    >
                      🗑 Delete Order
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}