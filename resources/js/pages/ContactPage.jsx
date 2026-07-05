import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSend = () => {
    const text = `Hello Naddaf Jewelry! 💎%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Subject:* ${form.subject}%0A*Message:* ${form.message}`
    window.open(`https://wa.me/96171937469?text=${text}`, '_blank')
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>

      <div className="py-20 px-8 text-center" style={{backgroundColor: '#6B1A2A'}}>
        <p className="text-xs tracking-[0.3em] mb-3" style={{color: '#E8C97A'}}>GET IN TOUCH</p>
        <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-base max-w-xl mx-auto" style={{color: 'rgba(255,255,255,0.7)'}}>
          We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-12">

        <div className="w-full md:w-1/2 flex flex-col gap-8">

          <div>
            <p className="text-xs font-bold tracking-[0.3em] mb-3" style={{color: '#E8C97A'}}>CONTACT INFO</p>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#1a1a1a'}}>Let's Talk</h2>
          </div>

          <a href="https://wa.me/96171937469" target="_blank" rel="noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105"
            style={{backgroundColor: '#25D366', color: 'white'}}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
              <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg">WhatsApp Us</p>
              <p className="text-sm opacity-90">+961 71 937 469</p>
              <p className="text-xs opacity-75 mt-1">Tap to chat on WhatsApp</p>
            </div>
          </a>

          <a href="tel:+96171937469"
            className="flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105"
            style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.1)'}}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#6B1A2A'}}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-base" style={{color: '#1a1a1a'}}>Call Us</p>
              <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>+961 71 937 469</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 rounded-2xl" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.1)'}}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#6B1A2A'}}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-base" style={{color: '#1a1a1a'}}>Visit Us</p>
              <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>Tripoli, Lebanon</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl" style={{backgroundColor: 'rgba(107,26,42,0.04)', border: '1px solid rgba(107,26,42,0.1)'}}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#6B1A2A'}}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-base" style={{color: '#1a1a1a'}}>Working Hours</p>
              <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-sm" style={{color: 'rgba(0,0,0,0.5)'}}>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>

        <div className="w-full md:w-1/2">
          <div className="p-8 rounded-3xl" style={{backgroundColor: 'white', border: '1px solid rgba(107,26,42,0.1)'}}>
            <h3 className="text-2xl font-bold mb-6" style={{color: '#1a1a1a'}}>Send us a Message</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>YOUR NAME</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="px-4 py-3 rounded-xl text-sm outline-none border"
                  style={{borderColor: 'rgba(107,26,42,0.2)', color: '#1a1a1a'}}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>PHONE NUMBER</label>
                <input
                  type="tel"
                  placeholder="+961 XX XXX XXX"
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  className="px-4 py-3 rounded-xl text-sm outline-none border"
                  style={{borderColor: 'rgba(107,26,42,0.2)', color: '#1a1a1a'}}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>SUBJECT</label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  className="px-4 py-3 rounded-xl text-sm outline-none border"
                  style={{borderColor: 'rgba(107,26,42,0.2)', color: '#1a1a1a'}}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold tracking-wider" style={{color: '#6B1A2A'}}>MESSAGE</label>
                <textarea
                  placeholder="Write your message here..."
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="px-4 py-3 rounded-xl text-sm outline-none border resize-none"
                  style={{borderColor: 'rgba(107,26,42,0.2)', color: '#1a1a1a'}}
                />
              </div>
              <button
                onClick={handleSend}
                className="w-full py-4 rounded-full font-bold text-sm text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                style={{backgroundColor: '#6B1A2A', color: '#FAF8F5'}}
              >
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}