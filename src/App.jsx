import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { exhibits, navItems, homeContent, langLabels } from './data/exhibits'

/* ───── Language Switcher ───── */
function LangSwitcher({ lang, setLang }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {Object.entries(langLabels).map(([key, label]) => (
        <button key={key} onClick={() => setLang(key)} style={{
          padding: '6px 14px', borderRadius: 6, border: 'none', cursor: 'pointer',
          fontSize: 13, fontWeight: 500,
          background: lang === key ? '#8B7355' : 'transparent',
          color: lang === key ? '#fff' : '#8B7355',
          transition: 'all 0.2s'
        }}>{label}</button>
      ))}
    </div>
  )
}

/* ───── Header ───── */
function Header({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = navItems[lang]
  const navigate = useNavigate()

  const goTo = (path) => { navigate(path); setMenuOpen(false) }

  return (
   <header style={{ background: '#1a1714', borderBottom: '1px solid #2a2520', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => goTo('/')}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#8B7355', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#fff' }}>★</div>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#d4c5a9', letterSpacing: 0.5 }}>MUSEUM</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <LangSwitcher lang={lang} setLang={setLang} />
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: '#d4c5a9', fontSize: 22, cursor: 'pointer', padding: 4 }}>☰</button>
        </div>
      </div>
      {menuOpen && (
        <nav style={{ background: '#1a1714', borderTop: '1px solid #2a2520', padding: '8px 20px 16px' }}>
          <button onClick={() => goTo('/')} style={menuStyle(false)}>{nav.home}</button>
          {Object.keys(exhibits).map(key => (
            <button key={key} onClick={() => goTo(`/exhibit/${key}`)} style={menuStyle(false)}>{nav[key]}</button>
          ))}
        </nav>
      )}
    </header>  
  )
}

const menuStyle = (active) => ({
  display: 'block', width: '100%', textAlign: 'left', padding: '10px 12px',
  background: active ? '#2a2520' : 'none', border: 'none',
  color: active ? '#d4c5a9' : '#9a8e7a', fontSize: 14, cursor: 'pointer',
  borderRadius: 6, marginBottom: 2
})

/* ───── Home Page ───── */
function HomePage({ lang }) {
  const c = homeContent[lang]
  const nav = navItems[lang]
  const exhibitKeys = Object.keys(exhibits)
  const icons = { heroes: '✈', friendship: '🤝', statistics: '📊', rear: '⚒', jarmenov: '🏰', divisions: '⚔' }

  return (
    <div className="fade-in">
      <div style={{ textAlign: 'center', padding: '60px 20px 40px', background: 'linear-gradient(180deg, #2a2520 0%, #1a1714 100%)' }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: '#8B7355', marginBottom: 16, textTransform: 'uppercase' }}>1941 — 1945</div>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: '#d4c5a9', margin: '0 0 12px', lineHeight: 1.3 }}>{c.title}</h1>
        <p style={{ fontSize: 14, color: '#9a8e7a', margin: '0 0 8px' }}>{c.subtitle}</p>
        <p style={{ fontSize: 13, color: '#7a7060', maxWidth: 480, margin: '16px auto 0' }}>{c.welcome}</p>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {exhibitKeys.map(key => (
            <Link key={key} to={`/exhibit/${key}`} style={{
              background: '#201d18', border: '1px solid #2a2520', borderRadius: 10, padding: '20px 16px',
              textAlign: 'left', transition: 'all 0.2s', display: 'block'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#8B7355' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2520' }}
            >
              <div style={{ fontSize: 24, marginBottom: 8 }}>{icons[key]}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#d4c5a9' }}>{nav[key]}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ───── Heroes Page ───── */
function HeroesPage({ lang }) {
  const data = exhibits.heroes[lang]
  const [open, setOpen] = useState(null)

  return (
    <div className="page-container fade-in">
      <h1 className="page-title">{data.title}</h1>
      <p className="page-subtitle">{data.subtitle}</p>
      {data.items.map((item, i) => (
        <div key={i} className="card" style={{ marginBottom: 12, overflow: 'hidden' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{
            width: '100%', textAlign: 'left', padding: '16px 20px', background: 'none',
            border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'
          }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500, color: '#d4c5a9' }}>{item.name}</div>
              <div style={{ fontSize: 12, color: '#8B7355', marginTop: 4 }}>{item.years} · {item.rank}</div>
            </div>
            <span style={{ color: '#8B7355', fontSize: 18, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0, marginLeft: 12 }}>▾</span>
          </button>
          {open === i && (
            <div style={{ padding: '0 20px 16px', fontSize: 14, lineHeight: 1.7, color: '#b0a590' }}>{item.desc}</div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ───── Friendship Page ───── */
function FriendshipPage({ lang }) {
  const data = exhibits.friendship[lang]
  return (
    <div className="page-container fade-in">
      <h1 className="page-title">{data.title}</h1>
      <div style={{ marginTop: 24 }}>
        {data.paragraphs.map((p, i) => (
          <p key={i} className="body-text" style={{ marginBottom: 16 }}>{p}</p>
        ))}
      </div>
    </div>
  )
}

/* ───── Statistics Page ───── */
function StatisticsPage({ lang }) {
  const data = exhibits.statistics[lang]
  return (
    <div className="page-container fade-in">
      <h1 className="page-title">{data.title}</h1>
      {data.groups.map((group, gi) => (
        <div key={gi} style={{ marginTop: 28 }}>
          <h2 className="section-heading">{group.heading}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginTop: 12 }}>
            {group.stats.map((s, si) => (
              <div key={si} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ───── Rear Page ───── */
function RearPage({ lang }) {
  const data = exhibits.rear[lang]
  return (
    <div className="page-container fade-in">
      <h1 className="page-title">{data.title}</h1>
      {data.sections.map((s, i) => (
        <div key={i} style={{ marginTop: 24 }}>
          <h2 className="section-heading">{s.heading}</h2>
          <p className="body-text">{s.text}</p>
        </div>
      ))}
    </div>
  )
}

/* ───── Jarmenov Page ───── */
function JarmenovPage({ lang }) {
  const data = exhibits.jarmenov[lang]
  return (
    <div className="page-container fade-in">
      <h1 className="page-title">{data.title}</h1>
      <div style={{ fontSize: 13, color: '#8B7355', marginBottom: 24 }}>{data.years}</div>
      {data.paragraphs.map((p, i) => (
        <p key={i} className="body-text" style={{ marginBottom: 16 }}>{p}</p>
      ))}
    </div>
  )
}

/* ───── Divisions Page ───── */
function DivisionsPage({ lang }) {
  const data = exhibits.divisions[lang]
  return (
    <div className="page-container fade-in">
      <h1 className="page-title">{data.title}</h1>
      <p className="page-subtitle">{data.subtitle}</p>
      {data.items.map((d, i) => (
        <div key={i} className="card" style={{ marginBottom: 16, padding: 20 }}>
          <h3 style={{ fontSize: 15, fontWeight: 500, color: '#d4c5a9', margin: '0 0 8px' }}>{d.name}</h3>
          <div style={{ fontSize: 13, color: '#8B7355', marginBottom: 6 }}>{d.formed}</div>
          <div style={{ fontSize: 13, color: '#b0a590', lineHeight: 1.6, marginBottom: 8 }}>{d.battles}</div>
          <div style={{ fontSize: 12, color: '#9a8e7a', padding: '6px 10px', background: '#2a2520', borderRadius: 6, display: 'inline-block' }}>{d.awards}</div>
        </div>
      ))}
    </div>
  )
}

/* ───── Exhibit Wrapper (reads URL param) ───── */
const pageMap = { heroes: HeroesPage, friendship: FriendshipPage, statistics: StatisticsPage, rear: RearPage, jarmenov: JarmenovPage, divisions: DivisionsPage }

function ExhibitPage({ lang }) {
  const { id } = useParams()
  const nav = navItems[lang]
  const PageComponent = pageMap[id]

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!PageComponent) return <div className="page-container"><p>Exhibit not found</p></div>

  return (
    <div>
      <Link to="/" className="back-btn">← {nav.home}</Link>
      <PageComponent lang={lang} />
    </div>
  )
}

/* ───── Footer ───── */
function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '32px 20px', borderTop: '1px solid #2a2520', marginTop: 40 }}>
      <div style={{ fontSize: 11, color: '#5a5347' }}>© 2026 · Museum · Almaty, Kazakhstan</div>
    </footer>
  )
}

/* ───── App ───── */
export default function App() {
  const [lang, setLang] = useState('kz')

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/exhibit/:id" element={<ExhibitPage lang={lang} />} />
      </Routes>
      <Footer />
    </div>
  )
}
