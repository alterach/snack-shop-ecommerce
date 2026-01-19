import { ShoppingCart, Menu, Search, X } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderProps {
  setCartOpen: (open: boolean) => void
}

export function Header({ setCartOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  
  const totalItems = useCartStore((state) => state.getTotalItems())
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue.trim()) {
      navigate(`/produk?search=${encodeURIComponent(searchValue)}`)
      setIsSearchOpen(false)
      setSearchValue('')
    }
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-2">
              <span className="text-2xl transition-transform duration-300 group-hover:rotate-12">🍪</span>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-primary-900 tracking-tight leading-none">
                  Snack Mama
                </span>
                <span className="text-[10px] text-primary-500 font-sans tracking-widest uppercase mt-0.5">
                  Artisanal Treats
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {['Beranda', 'Produk', 'Tentang', 'Kontak'].map((item) => {
                const path = item === 'Beranda' ? '/' : `/${item.toLowerCase()}`
                const isActive = location.pathname === path
                
                return (
                  <Link 
                    key={item}
                    to={path} 
                    className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                      isActive ? 'text-primary-900' : 'text-primary-600 hover:text-primary-900'
                    }`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 h-px bg-primary-900 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 rounded-full hover:bg-primary-100/50 text-primary-800 transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </button>
              
              <button
                className="relative p-2 rounded-full hover:bg-primary-100/50 text-primary-800 transition-colors group"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary-900 text-white text-[10px] flex items-center justify-center font-bold shadow-md">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <button
                className="md:hidden p-2 rounded-full hover:bg-primary-100/50 text-primary-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Search Bar Overlay */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:px-8 border-t border-primary-50"
              >
                <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Cari jajanan favoritmu..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-full bg-cream-50 border-none rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 transition-all placeholder:text-primary-300 text-primary-900"
                  />
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {['Beranda', 'Produk', 'Tentang', 'Kontak'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Beranda' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-primary-900 hover:text-primary-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
