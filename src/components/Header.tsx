import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/portfolio">Portfolio</Link>
        {' | '}
        <Link to="/blog">Blog</Link>
        {' | '}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
