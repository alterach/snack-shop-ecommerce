import { ShoppingCart, Menu } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface HeaderProps {
  setCartOpen: (open: boolean) => void
}

export function Header({ setCartOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-primary-100">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🍪</span>
            <span className="text-xl font-bold text-primary-600">Snack Mama</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
              Beranda
            </Link>
            <Link to="/products" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
              Produk
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
              Tentang
            </Link>
            <Link to="/contact" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
              Kontak
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="relative p-2 rounded-full hover:bg-primary-50 transition-colors"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-6 w-6 text-slate-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-primary-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
