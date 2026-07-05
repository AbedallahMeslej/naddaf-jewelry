export default function WhyUs() {
  const features = [
    {
      title: 'Premium Quality',
      desc: 'Finest materials from around the world',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
        </svg>
      )
    },
    {
      title: 'Handcrafted',
      desc: 'Every piece made with passion & care',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l-.001-1.286a3.404 3.404 0 00-.02-.12M13.125 7.5h3.75"/>
        </svg>
      )
    },
    {
      title: 'Secure Payment',
      desc: '100% secure & safe checkout',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
        </svg>
      )
    },
    {
      title: 'Easy Returns',
      desc: 'Hassle-free return within 7 days',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>
      )
    },
    {
      title: 'Lebanon Shipping',
      desc: 'Fast delivery to your doorstep',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"/>
        </svg>
      )
    },
    {
      title: 'Authenticity',
      desc: 'Certified genuine materials guaranteed',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
        </svg>
      )
    },
  ]

  return (
    <div className="py-12 px-4 md:px-8" style={{backgroundColor: '#FAF8F5'}}>
      <div className="max-w-7xl mx-auto">
        
        <p className="text-center text-xs font-bold tracking-[0.3em] mb-8" style={{color: '#6B1A2A'}}>
          WHY CHOOSE NADDAF?
        </p>

        <div className="rounded-2xl py-8 px-6 grid grid-cols-2 md:grid-cols-6 gap-6" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.08)'}}>
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-start gap-2 px-2 border-r last:border-r-0" style={{borderColor: 'rgba(107,26,42,0.1)'}}>
              <div style={{color: '#6B1A2A'}}>
                {f.icon}
              </div>
              <p className="font-bold text-sm" style={{color: '#1a1a1a'}}>{f.title}</p>
              <p className="text-xs leading-relaxed" style={{color: '#1a1a1a', opacity: 0.5}}>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}