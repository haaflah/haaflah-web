import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="site-header-inner">
        <Link to="/" className="site-brand" aria-label="Haaflah home" onClick={closeMenu}>
          <img src="/logo.png" alt="Haaflah" />
        </Link>

        <div id="site-navigation" className={`site-nav${menuOpen ? ' is-open' : ''}`}>
          <a href="/#blueprint" onClick={closeMenu}>Blueprint</a>
          <a href="/#open-commerce" onClick={closeMenu}>Open Commerce</a>
          <Link to="/register" onClick={closeMenu}>Register</Link>
        </div>

        <Link to="/register" className="site-header-cta" onClick={closeMenu}>
          Join the build
        </Link>

        <button
          type="button"
          className="site-menu-toggle"
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  )
}
