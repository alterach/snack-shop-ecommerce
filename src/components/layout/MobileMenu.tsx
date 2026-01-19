import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl md:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-primary-600">Menu</span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-primary-50 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                <Link
                  to="/"
                  onClick={onClose}
                  className="text-lg font-medium text-slate-700 hover:text-primary-600 py-3 px-4 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  🏠 Beranda
                </Link>
                <Link
                  to="/products"
                  onClick={onClose}
                  className="text-lg font-medium text-slate-700 hover:text-primary-600 py-3 px-4 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  🍪 Produk
                </Link>
                <Link
                  to="/about"
                  onClick={onClose}
                  className="text-lg font-medium text-slate-700 hover:text-primary-600 py-3 px-4 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  ℹ️ Tentang
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="text-lg font-medium text-slate-700 hover:text-primary-600 py-3 px-4 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  📞 Kontak
                </Link>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
