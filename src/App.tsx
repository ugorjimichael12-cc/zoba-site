import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  Phone,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

const whatsappNumber = '2349160050367'
const instagram = 'https://www.instagram.com/ZOBA_LUXE_SPA/'

const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

const services = [
  {
    id: 'glow',
    number: '01',
    title: 'Skincare & Facials',
    short: 'Glow',
    description:
      'A considered approach to skincare, facial care and the rituals that help you feel refreshed and confident.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'relax',
    number: '02',
    title: 'Massage & Body Therapy',
    short: 'Relax',
    description:
      'Slow down, reset and make space for rest with a body-focused wellness experience.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'refine',
    number: '03',
    title: 'Beauty Aesthetics',
    short: 'Refine',
    description:
      'Beauty-focused treatments presented as personal experiences rather than one-size-fits-all appointments.',
    image:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'polish',
    number: '04',
    title: 'Nail Care',
    short: 'Polish',
    description:
      'Detail-led nail care for the finishing touch to your personal beauty routine.',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=85',
  },
]

const reviews = [
  {
    quote: "She's good in her work.",
    name: 'Wasiu Keshinro',
  },
  {
    quote: 'Very professional and good at what she does.',
    name: 'Nnanna Ginigeme Ginigeme',
  },
  {
    quote: 'One of the best spa spot here in Lagos.',
    name: 'Wakeshfada',
  },
]

const journal = [
  {
    category: 'SELF-CARE',
    title: 'How to build a better self-care ritual',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=85',
  },
  {
    category: 'SKIN',
    title: 'What to consider before your next facial',
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1100&q=85',
  },
  {
    category: 'WELLNESS',
    title: 'Making time to slow down is part of the experience',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState('glow')
  const [bookingOpen, setBookingOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Skincare & Facials',
    date: '',
    time: '',
  })

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle('is-scrolled', window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const submitBooking = (event: React.FormEvent) => {
    event.preventDefault()
    const message = [
      'Hello ZOBA, I would like to request an appointment.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
    ].join('\n')

    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span>BEAUTY · WELLNESS · SELF-CARE</span>
        <span className="announcement-location">OKOTA, LAGOS</span>
      </div>

      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Back to home">
          <span className="brand-mark">Z</span>
          <span>
            <strong>ZOBA</strong>
            <small>ELITE SPA & MORE</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('services')}>Services</button>
          <button onClick={() => scrollTo('story')}>About</button>
          <button onClick={() => scrollTo('journal')}>Journal</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>

        <button className="header-book" onClick={() => setBookingOpen(true)}>
          Book now <ArrowUpRight size={16} />
        </button>

        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Open menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {['experience', 'services', 'story', 'journal', 'contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item)}>
              {item}
              <ArrowUpRight size={17} />
            </button>
          ))}
          <button className="mobile-book" onClick={() => { setMenuOpen(false); setBookingOpen(true) }}>
            Book your experience
            <CalendarDays size={17} />
          </button>
        </div>
      )}

      <main>
        <section id="home" className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow light">
              <span />
              ZOBA ELITE SPA & MORE
            </div>
            <h1>
              Make time
              <em>for yourself.</em>
            </h1>
            <p>
              Beauty, wellness and intentional self-care, brought together in one refined
              experience in Lagos.
            </p>
            <div className="hero-actions">
              <button className="button button-light" onClick={() => setBookingOpen(true)}>
                Book your experience <ArrowUpRight size={18} />
              </button>
              <button className="text-button light-text" onClick={() => scrollTo('services')}>
                Explore services <MoveRight size={18} />
              </button>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo('experience')} aria-label="Scroll down">
            <span>Scroll to explore</span>
            <ArrowDown size={17} />
          </button>
        </section>

        <section id="experience" className="intro section">
          <div className="section-kicker">01 / THE EXPERIENCE</div>
          <div className="intro-grid">
            <h2>
              More than a treatment.
              <em>A moment for you.</em>
            </h2>
            <div>
              <p className="large-copy">
                Step away from the noise and into an experience designed around beauty,
                wellness and feeling your best.
              </p>
              <p>
                From skincare and body therapy to beauty aesthetics and nail care, ZOBA
                brings self-care into one considered destination.
              </p>
              <button className="line-link" onClick={() => scrollTo('services')}>
                Discover ZOBA <MoveRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="ritual">
          <div className="ritual-image" />
          <div className="ritual-copy">
            <div className="section-kicker light">THE ZOBA RITUAL</div>
            <h2>
              Arrive.
              <br />
              Unwind.
              <br />
              <em>Renew.</em>
            </h2>
            <p>
              A beautiful appointment is more than the service itself. It is the pause
              before it, the feeling during it and the confidence you carry afterwards.
            </p>
            <button className="button button-outline-light" onClick={() => setBookingOpen(true)}>
              Begin your experience <ArrowUpRight size={18} />
            </button>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / YOUR EXPERIENCE</div>
              <h2>Choose how you want to <em>feel.</em></h2>
            </div>
            <p>
              Explore ZOBA through the experiences that matter to you. Your full treatment
              catalogue can be tailored here for the live website.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <button
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                onFocus={() => setActiveService(service.id)}
                onClick={() => {
                  setActiveService(service.id)
                  setBookingOpen(true)
                  setForm((current) => ({ ...current, service: service.title }))
                }}
              >
                <img src={service.image} alt="" />
                <div className="service-card-overlay" />
                <div className="service-number">{service.number}</div>
                <div className="service-info">
                  <span>{service.short}</span>
                  <h3>{service.title}</h3>
                  <span className="service-arrow"><ArrowUpRight /></span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="finder section">
          <div className="finder-panel">
            <div className="finder-copy">
              <div className="section-kicker">03 / FIND YOUR EXPERIENCE</div>
              <h2>Not sure what to <em>book?</em></h2>
              <p>
                Start with how you want to feel. We can turn this into an intelligent
                treatment guide when ZOBA's complete service catalogue is available.
              </p>
            </div>
            <div className="finder-options">
              {[
                ['I want to relax', 'relax'],
                ['I want to care for my skin', 'glow'],
                ['I want a beauty treatment', 'refine'],
                ['I want to feel polished', 'polish'],
              ].map(([label, id]) => (
                <button key={id} onClick={() => {
                  setActiveService(id)
                  setBookingOpen(true)
                  const service = services.find((item) => item.id === id)
                  if (service) setForm((current) => ({ ...current, service: service.title }))
                }}>
                  <span>{label}</span>
                  <ArrowUpRight size={18} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="story section">
          <div className="story-visual">
            <div className="story-image-main" />
            <div className="story-badge">
              <Sparkles size={20} />
              <span>YOUR<br />ZOBA<br />MOMENT</span>
            </div>
          </div>
          <div className="story-copy">
            <div className="section-kicker">04 / ABOUT THE BRAND</div>
            <h2>Beauty should feel like <em>you.</em></h2>
            <p className="large-copy">
              ZOBA is a beauty and wellness destination created for people who value
              looking good, feeling refreshed and making time for themselves.
            </p>
            <p>
              This concept positions the brand around a complete experience rather than
              a list of appointments — a digital home where customers can discover,
              trust, choose and connect with ZOBA.
            </p>
            <div className="story-stats">
              <div>
                <strong>5.0</strong>
                <span>Customer rating<br />provided for the pitch</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Core experience<br />categories</span>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews section">
          <div className="section-heading compact">
            <div>
              <div className="section-kicker">05 / CLIENT LOVE</div>
              <h2>Words from the <em>experience.</em></h2>
            </div>
            <div className="rating">
              <span>5.0</span>
              <div>{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}</div>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="quote-mark">“</div>
                <p>{review.quote}</p>
                <div className="review-person">
                  <span>{review.name.slice(0, 1)}</span>
                  <div>
                    <strong>{review.name}</strong>
                    <small>Client review</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery">
          <div className="gallery-copy">
            <div className="section-kicker light">06 / STEP INTO ZOBA</div>
            <h2>Let the experience <em>speak.</em></h2>
            <p>
              A future live gallery can showcase the real ZOBA space, treatments, details
              and customer experience.
            </p>
            <a href={instagram} target="_blank" rel="noreferrer" className="button button-light">
              <Instagram size={18} /> Follow @ZOBA_LUXE_SPA
            </a>
          </div>
          <div className="gallery-grid">
            <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=85" alt="Spa treatment" />
            <img src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85" alt="Nail care detail" />
            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85" alt="Skincare treatment" />
            <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=85" alt="Wellness detail" />
          </div>
        </section>

        <section id="journal" className="journal section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">07 / THE ZOBA JOURNAL</div>
              <h2>Beauty, wellness & <em>self-care.</em></h2>
            </div>
            <p>
              A content space designed to help ZOBA stay useful between appointments and
              create new opportunities for Google discovery.
            </p>
          </div>
          <div className="journal-grid">
            {journal.map((post) => (
              <article className="journal-card" key={post.title}>
                <div className="journal-image">
                  <img src={post.image} alt="" />
                </div>
                <div className="journal-meta">
                  <span>{post.category}</span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{post.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="booking-banner">
          <div className="booking-banner-content">
            <div className="section-kicker light">YOUR NEXT MOMENT</div>
            <h2>You deserve <em>the experience.</em></h2>
            <p>Make time for yourself. Your ZOBA experience begins with a conversation.</p>
            <div className="hero-actions">
              <button className="button button-light" onClick={() => setBookingOpen(true)}>
                Book your experience <ArrowUpRight size={18} />
              </button>
              <a
                className="text-button light-text"
                href={whatsappUrl('Hello ZOBA, I would like to make an enquiry.')}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div>
            <div className="section-kicker">08 / FIND ZOBA</div>
            <h2>Come as you are.<br /><em>Leave renewed.</em></h2>
          </div>
          <div className="contact-details">
            <div className="contact-row">
              <MapPin />
              <div>
                <span>LOCATION</span>
                <strong>100 Community Road,<br />off Ago Palace Way, Okota, Lagos</strong>
              </div>
            </div>
            <div className="contact-row">
              <Phone />
              <div>
                <span>PHONE</span>
                <a href="tel:+2349160050367">+234 916 005 0367</a>
              </div>
            </div>
            <div className="contact-row">
              <Instagram />
              <div>
                <span>INSTAGRAM</span>
                <a href={instagram} target="_blank" rel="noreferrer">@ZOBA_LUXE_SPA</a>
              </div>
            </div>
            <button className="button button-dark contact-book" onClick={() => setBookingOpen(true)}>
              Book your experience <ArrowUpRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark">Z</span>
          <div>
            <strong>ZOBA</strong>
            <small>ELITE SPA & MORE</small>
          </div>
        </div>
        <p>Beauty · Wellness · Self-care</p>
        <span>© {new Date().getFullYear()} ZOBA Elite Spa & More</span>
      </footer>

      {bookingOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setBookingOpen(false)
        }}>
          <div className="booking-modal">
            <button className="modal-close" onClick={() => setBookingOpen(false)} aria-label="Close">
              <X />
            </button>
            {!submitted ? (
              <>
                <div className="section-kicker">REQUEST AN APPOINTMENT</div>
                <h2>Begin your <em>ZOBA experience.</em></h2>
                <p className="modal-intro">
                  Choose your preferred details. Your request will continue through WhatsApp.
                </p>
                <form onSubmit={submitBooking}>
                  <label>
                    Your name
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your name" />
                  </label>
                  <label>
                    Phone / WhatsApp
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+234..." />
                  </label>
                  <label>
                    Experience
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                      {services.map((service) => <option key={service.id}>{service.title}</option>)}
                    </select>
                  </label>
                  <div className="form-two">
                    <label>
                      Preferred date
                      <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                    </label>
                    <label>
                      Preferred time
                      <input required type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
                    </label>
                  </div>
                  <button className="button button-dark form-submit" type="submit">
                    Continue on WhatsApp <MessageCircle size={18} />
                  </button>
                </form>
              </>
            ) : (
              <div className="success-state">
                <div className="success-icon"><Check /></div>
                <div className="section-kicker">REQUEST READY</div>
                <h2>You're one step from <em>ZOBA.</em></h2>
                <p>
                  Your WhatsApp conversation has been opened with your appointment details.
                  Complete the conversation there to confirm your request.
                </p>
                <button className="button button-dark" onClick={() => { setSubmitted(false); setBookingOpen(false) }}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
