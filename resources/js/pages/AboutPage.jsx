export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      {/* Header */}
      <div className="py-20 px-8 text-center" style={{backgroundColor: '#6B1A2A'}}>
        <p className="text-xs tracking-[0.3em] mb-3" style={{color: '#E8C97A'}}>OUR STORY</p>
        <h1 className="text-5xl font-bold text-white mb-4">About Naddaf</h1>
        <p className="text-base max-w-xl mx-auto" style={{color: 'rgba(255,255,255,0.7)'}}>
          Crafting timeless jewelry with passion, precision, and love since 2009.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=800"
            alt="Our Story"
            className="w-full h-96 object-cover rounded-3xl"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-xs font-bold tracking-[0.3em]" style={{color: '#E8C97A'}}>WHO WE ARE</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{color: '#1a1a1a'}}>
            More Than Just <br />
            <span style={{color: '#6B1A2A'}}>Jewelry</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{color: 'rgba(0,0,0,0.6)'}}>
            Naddaf Jewelry was founded in 2009 in Tripoli, Lebanon, with a simple vision — to create pieces that tell a story. Each ring, necklace, and bracelet we craft is more than an accessory; it's a memory, a milestone, a legacy.
          </p>
          <p className="text-sm leading-relaxed" style={{color: 'rgba(0,0,0,0.6)'}}>
            Over 15 years later, we've grown into one of Lebanon's most trusted jewelry brands, serving thousands of customers who trust us with their most precious moments — engagements, anniversaries, and everyday elegance.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 px-8" style={{backgroundColor: '#6B1A2A'}}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '10K+', label: 'Happy Customers' },
            { number: '500+', label: 'Unique Designs' },
            { number: '100%', label: 'Authentic Gold' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-4xl font-bold mb-2" style={{color: '#E8C97A'}}>{stat.number}</p>
              <p className="text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] mb-3" style={{color: '#E8C97A'}}>WHAT WE STAND FOR</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{color: '#1a1a1a'}}>Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Authenticity',
              desc: 'Every piece we create uses 100% authentic materials. We never compromise on quality — your trust means everything to us.',
              icon: (
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                </svg>
              )
            },
            {
              title: 'Craftsmanship',
              desc: 'Our master jewelers bring decades of experience to every piece. Each item is handcrafted with meticulous attention to detail.',
              icon: (
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>
                </svg>
              )
            },
            {
              title: 'Customer Love',
              desc: 'Our customers are our family. We go above and beyond to ensure every experience with Naddaf is memorable and special.',
              icon: (
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                </svg>
              )
            },
          ].map(val => (
            <div key={val.title} className="p-8 rounded-2xl flex flex-col gap-4" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.08)'}}>
              <div style={{color: '#6B1A2A'}}>{val.icon}</div>
              <h3 className="text-xl font-bold" style={{color: '#1a1a1a'}}>{val.title}</h3>
              <p className="text-sm leading-relaxed" style={{color: 'rgba(0,0,0,0.6)'}}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="py-16 px-8" style={{backgroundColor: 'rgba(107,26,42,0.04)'}}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.3em] mb-3" style={{color: '#E8C97A'}}>MEET THE FAMILY</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{color: '#1a1a1a'}}>The People Behind Naddaf</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmad Naddaf', role: 'Founder & Master Jeweler', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
              { name: 'Sara Naddaf', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
              { name: 'Karim Naddaf', role: 'Customer Experience', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
            ].map(member => (
              <div key={member.name} className="flex flex-col items-center gap-4">
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full object-cover" style={{border: '3px solid #E8C97A'}}/>
                <div>
                  <p className="font-bold text-base" style={{color: '#1a1a1a'}}>{member.name}</p>
                  <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4" style={{color: '#1a1a1a'}}>Ready to Find Your Perfect Piece?</h2>
        <p className="text-sm mb-8" style={{color: 'rgba(0,0,0,0.5)'}}>Explore our collection and discover jewelry that tells your story.</p>
        <a href="/products" className="px-10 py-4 rounded-full font-bold text-sm inline-block transition-all duration-300 hover:scale-105" style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}>
          Shop Now
        </a>
      </div>

    </div>
  )
}