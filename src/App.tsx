import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Home from './pages/Home.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Blog from './pages/Blog.tsx'
import BlogPost from './pages/BlogPost.tsx'
import Contact from './pages/Contact.tsx'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-base font-body text-ink">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
