export default function WhyChooseUs() {
  return (
    <div className="py-16 px-8" style={{backgroundColor: '#FAF8F5'}}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] mb-3" style={{color: '#E8C97A'}}>
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-5xl font-bold" style={{color: '#1a1a1a'}}>
            Not Just Jewelry. <br />
            <span style={{color: '#6B1A2A'}}>An Experience.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="rounded-2xl p-8 flex flex-col gap-4" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.08)'}}>
            <span className="text-5xl font-bold" style={{color: '#6B1A2A'}}>4+</span>
            <h3 className="text-xl font-bold" style={{color: '#1a1a1a'}}>Years of Excellence</h3>
            <p className="text-sm leading-relaxed" style={{color: 'rgba(0,0,0,0.5)'}}>
              Over 4 years crafting fine jewelry with passion, precision, and unmatched quality.
            </p>
          </div>

          <div className="rounded-2xl p-8 flex flex-col gap-4" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.08)'}}>
            <span className="text-5xl font-bold" style={{color: '#6B1A2A'}}>10K+</span>
            <h3 className="text-xl font-bold" style={{color: '#1a1a1a'}}>Happy Customers</h3>
            <p className="text-sm leading-relaxed" style={{color: 'rgba(0,0,0,0.5)'}}>
              Thousands of satisfied customers across Lebanon who trust Naddaf for every special moment.
            </p>
          </div>

          <div className="rounded-2xl p-8 flex flex-col gap-4" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.08)'}}>
            <span className="text-5xl font-bold" style={{color: '#6B1A2A'}}>500+</span>
            <h3 className="text-xl font-bold" style={{color: '#1a1a1a'}}>Unique Designs</h3>
            <p className="text-sm leading-relaxed" style={{color: 'rgba(0,0,0,0.5)'}}>
              From classic to contemporary, every piece is handcrafted to tell your unique story.
            </p>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          <div className="rounded-2xl p-8 flex items-center gap-6" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.08)'}}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(107,26,42,0.08)'}}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1" style={{color: '#1a1a1a'}}>Certified Authenticity</h3>
              <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>Every piece comes with a certificate of authenticity and quality guarantee.</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 flex items-center gap-6" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.08)'}}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(107,26,42,0.08)'}}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#6B1A2A" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1" style={{color: '#1a1a1a'}}>Made With Love</h3>
              <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>Each piece is handcrafted with care, passion, and attention to every detail.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}