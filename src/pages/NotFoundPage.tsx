import { Link } from 'react-router-dom'
import { Home, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="text-8xl mb-6"
        >
          🍪
        </motion.div>
        
        <h1 className="text-6xl font-serif font-bold text-primary-950 mb-4">404</h1>
        <h2 className="text-2xl font-serif text-primary-700 mb-4">Page Not Found</h2>
        <p className="text-primary-600 mb-8">
          Oops! Sepertinya halaman yang kamu cari sudah habis dimakan. 
          Yuk cari jajanan lainnya!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link to="/produk" className="btn-secondary inline-flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            Browse Products
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
