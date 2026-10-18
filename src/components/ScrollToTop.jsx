import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts.js'

const PAGE_TITLES = {
  '/': 'Vectra Limited — Auckland IT Solutions',
  '/services': 'Services — Vectra Limited',
  '/about': 'About Us — Vectra Limited',
  '/blog': 'Blog & Insights — Vectra Limited',
  '/contact': 'Contact Us — Vectra Limited',
}

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Reset window scroll to top immediately on route change
    window.scrollTo(0, 0)

    // Handle blog article specific route
    if (pathname.startsWith('/blog/')) {
      const idOrSlug = pathname.replace('/blog/', '')
      const post = blogPosts.find(p => String(p.id) === idOrSlug || p.slug === idOrSlug)
      if (post) {
        document.title = `${post.title} — Vectra Limited Blog`
        return
      }
    }

    // Update document title dynamically
    document.title = PAGE_TITLES[pathname] || 'Vectra Limited — Auckland IT Solutions'
  }, [pathname])

  return null
}

