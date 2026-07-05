export default function ShippingPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      {/* Header */}
      <div className="py-20 px-8 text-center" style={{backgroundColor: '#6B1A2A'}}>
        <p className="text-xs tracking-[0.3em] mb-3" style={{color: '#E8C97A'}}>DELIVERY INFO</p>
        <h1 className="text-5xl font-bold text-white mb-4">Shipping Policy</h1>
        <p className="text-base max-w-xl mx-auto" style={{color: 'rgba(255,255,255,0.7)'}}>
          We deliver all over Lebanon. Here's everything you need to know about our shipping process.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-16 flex flex-col gap-8">

        {/* Ready Items */}
        <div className="p-8 rounded-3xl" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#6B1A2A'}}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest mb-1" style={{color: '#E8C97A'}}>READY ITEMS</p>
              <h2 className="text-2xl font-bold" style={{color: '#1a1a1a'}}>In-Stock Pieces</h2>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl" style={{backgroundColor: 'rgba(107,26,42,0.04)'}}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <p className="font-bold text-base" style={{color: '#6B1A2A'}}>2 - 4 Business Days</p>
              <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>From order confirmation to your doorstep</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              'Items are carefully packaged and prepared within 24 hours',
              'Delivery covers all safe areas across Lebanon',
              'You will receive a confirmation call before delivery',
              'Cash on delivery available — $4 flat rate',
            ].map(item => (
              <div key={item} className="flex items-start gap-3">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={2} className="mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                <p className="text-sm" style={{color: 'rgba(0,0,0,0.6)'}}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Items */}
        <div className="p-8 rounded-3xl" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#E8C97A'}}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest mb-1" style={{color: '#E8C97A'}}>CUSTOM PIECES</p>
              <h2 className="text-2xl font-bold" style={{color: '#1a1a1a'}}>Made to Order</h2>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl" style={{backgroundColor: 'rgba(232,201,122,0.1)'}}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <p className="font-bold text-base" style={{color: '#6B1A2A'}}>8 Business Days</p>
              <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>Includes crafting time + delivery</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              'Custom pieces are handcrafted by our master jewelers',
              'You will be contacted to confirm your design details',
              'Progress updates will be shared with you during crafting',
              'Final delivery after quality inspection and approval',
              'Cash on delivery available — $4 flat rate',
            ].map(item => (
              <div key={item} className="flex items-start gap-3">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={2} className="mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                <p className="text-sm" style={{color: 'rgba(0,0,0,0.6)'}}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Fee */}
        <div className="p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6" style={{backgroundColor: '#6B1A2A'}}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(232,201,122,0.2)'}}>
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#E8C97A" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H3m13.5 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H9m10.125-9H3.375c-.621 0-1.125.504-1.125 1.125v4.5c0 .621.504 1.125 1.125 1.125h16.5c.621 0 1.125-.504 1.125-1.125v-4.5c0-.621-.504-1.125-1.125-1.125z"/>
            </svg>
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-white mb-1">$4 Flat Delivery Rate</p>
            <p className="text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>Cash on Delivery — All over Lebanon Safe Areas Only</p>
          </div>
        </div>

        {/* Questions */}
        <div className="p-8 rounded-3xl text-center" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.1)'}}>
          <p className="font-bold text-lg mb-2" style={{color: '#1a1a1a'}}>Have Questions About Your Order?</p>
          <p className="text-sm mb-6" style={{color: 'rgba(0,0,0,0.5)'}}>Our team is always here to help you.</p>
          
          <a  href="https://wa.me/96171937469"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{backgroundColor: '#25D366', color: 'white'}}
          >
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact Us on WhatsApp
          </a>
        </div>

      </div>
    </div>
  )
}