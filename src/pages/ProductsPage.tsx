import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { products, categories } from '@/data/products'
import { ProductCard } from '@/components/products/ProductCard'
import { useSearchParams } from 'react-router-dom'
import { PageTransition } from '@/components/layout/PageTransition'

export function ProductsPage() {
  const [searchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category') || null
  )

  useEffect(() => {
    const query = searchParams.get('search')
    if (query !== null) {
      setSearchTerm(query)
    }
    
    const category = searchParams.get('category')
    if (category !== null) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <PageTransition className="min-h-screen bg-cream-50 pb-16">
      {/* Header */}
      <div className="bg-white border-b border-primary-100 sticky top-16 z-30">
        <div className="container-custom py-6">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Semua Produk
          </motion.h1>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari jajanan favoritmu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-12"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                !selectedCategory
                  ? 'bg-primary-500 text-white'
                  : 'bg-cream-200 text-slate-700 hover:bg-cream-300'
              }`}
            >
              Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-cream-200 text-slate-700 hover:bg-cream-300'
                }`}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-custom py-8">
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Tidak ada produk ditemukan
            </h3>
            <p className="text-slate-600">
              Coba kata kunci lain atau ubah kategori pencarianmu
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </PageTransition>
  )
}
