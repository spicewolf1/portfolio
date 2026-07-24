import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b-2 border-accent/20 bg-white/60 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-700 text-ink">
          my portfolio 🌤️
        </Link>
        <div className="flex gap-4 font-display text-sm">
          <Link
            to="/portfolio"
            className="rounded-full px-3 py-1 transition hover:bg-accent/10"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="rounded-full px-3 py-1 transition hover:bg-accent/10"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="rounded-full px-3 py-1 transition hover:bg-accent/10"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
