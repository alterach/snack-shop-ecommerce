import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { ProductCard } from '@/components/products/ProductCard'

export function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-400 via-accent-300 to-cream-200 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Jajanan Rumahan <span className="text-primary-700">Bikin Nagih!</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8">
              Nikmati keripik renyah, brownies lembut, dan puding segar. Dibuat dengan cinta
              dan bahan-bahan pilihan setiap hari.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 btn-primary text-lg"
            >
              Lihat Produk
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute right-4 bottom-4 md:right-12 md:bottom-12 text-[200px] md:text-[300px] opacity-20 select-none"
          >
            🍪
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Produk Terlaris
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pilihan favorit pelanggan kami yang pasti bikin ketagihan!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/products" className="inline-flex items-center gap-2 btn-secondary">
              Lihat Semua Produk
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12"
          >
            Kategori Kami
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['🥔 Keripik', '🍫 Brownies', '🍮 Puding', '🧊 Es Gabus', '🥟 Pastel', '🍪 Lainnya'].map((cat, i) => (
              <Link
                key={cat}
                to={`/products?category=${cat.split(' ')[1].toLowerCase()}`}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="snack-card text-center p-6 aspect-square flex flex-col items-center justify-center"
                >
                  <span className="text-5xl mb-3 group-hover:scale-110 transition-transform">{cat.split(' ')[0]}</span>
                  <span className="font-bold text-slate-700">{cat.split(' ')[1]}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
