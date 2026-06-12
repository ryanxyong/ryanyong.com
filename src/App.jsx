import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import Writing from './pages/Writing'
import Post from './pages/Post'
import Photography from './pages/Photography'
import Eating from './pages/Eating'
import About from './pages/About'
import NotFound from './pages/NotFound'

// HashRouter is used deliberately: it needs zero server config and deep links
// never 404 on GitHub Pages. URLs look like ryanyong.com/#/work.
export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<Post />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/eating" element={<Eating />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
