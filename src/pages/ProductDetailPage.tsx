import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { products } from '@/data/products'
import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'
import { ArrowLeft, Plus, Minus, Star, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addItem } = useCartStore()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <span className="text-8xl mb-4 block">😕</span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Produk tidak ditemukan
          </h2>
          <Link to="/products">
            <Button>Kembali ke Produk</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    navigate(-1)
  }

  return (
    <div className="min-h-screen bg-cream-50 pb-16">
      <div className="container-custom py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 hover:text-primary-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Kembali
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-4 shadow-soft"
          >
            <div className="aspect-square bg-cream-200 rounded-2xl overflow-hidden">
              <img
                src={product.images[0] || '/images/placeholder.jpg'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              {product.rating && (
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-accent-500 text-accent-500'
                          : 'text-slate-300'
                      }`}
                    />
                  ))}
                  <span className="font-semibold text-slate-900">
                    {product.rating}
                  </span>
                </div>
              )}

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {product.name}
              </h1>

              <p className="text-4xl font-bold text-primary-600">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Deskripsi
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.stock && (
              <div className="flex items-center gap-2">
                <span className="text-slate-600">Stok tersedia:</span>
                <span className="font-bold text-primary-600">
                  {product.stock} pcs
                </span>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-slate-900">Jumlah:</span>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-2 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-2 rounded-xl hover:bg-cream-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="font-bold text-xl w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock || 99, quantity + 1))}
                    disabled={quantity >= (product.stock || 99)}
                    className="p-2 rounded-xl hover:bg-cream-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <span className="text-sm text-slate-500">
                  Total: Rp {(product.price * quantity).toLocaleString('id-ID')}
                </span>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full text-lg py-4"
                variant="primary"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Tambah ke Keranjang
              </Button>
            </div>

            {/* Related Products */}
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-4">
                Produk Serupa
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {products
                  .filter((p) => p.category === product.category && p.id !== product.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-playful transition-all hover:-translate-y-1"
                    >
                      <div className="aspect-square bg-cream-200 rounded-xl mb-2 overflow-hidden">
                        <img
                          src={p.images[0] || '/images/placeholder.jpg'}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-sm text-slate-900 line-clamp-2">
                        {p.name}
                      </h4>
                      <p className="text-primary-600 font-bold text-sm">
                        Rp {p.price.toLocaleString('id-ID')}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
