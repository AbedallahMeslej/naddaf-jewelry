export default function PromoBanner() {
  return (
    <div className="mx-4 md:mx-8 my-6 rounded-3xl overflow-hidden" style={{backgroundColor: '#f5ede8'}}>
      <div className="flex flex-col md:flex-row items-center">

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=90"
            alt="Promo"
            className="w-full h-56 md:h-72 object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 px-8 md:px-12 py-8 flex flex-col gap-4">
          <p className="text-xs font-bold tracking-[0.3em]" style={{color: '#6B1A2A'}}>
            LIMITED TIME OFFER
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{color: '#1a1a1a'}}>
            Get 15% Off <br />
            On Your First Order
          </h2>
          <p className="text-sm" style={{color: '#1a1a1a', opacity: 0.6}}>
            Use code <strong>NADDAF15</strong> at checkout
          </p>
          <button
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm w-fit transition-all duration-300 hover:scale-105"
            style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
          >
            Claim Offer →
          </button>
        </div>

      </div>
    </div>
  )
}