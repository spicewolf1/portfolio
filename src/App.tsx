import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Home from './pages/Home.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Blog from './pages/Blog.tsx'
import Contact from './pages/Contact.tsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
