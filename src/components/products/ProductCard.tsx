import { Product } from '@/types'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="snack-card group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-cream-200 rounded-2xl mb-4 overflow-hidden">
          <img
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-accent-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              ⭐ Featured
            </span>
          )}
        </div>

        <h3 className="font-bold text-lg text-slate-900 mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          {product.rating && (
            <>
              <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
              <span className="text-sm font-medium text-slate-600">{product.rating}</span>
            </>
          )}
          {product.stock && (
            <span className="text-sm text-slate-500 ml-auto">
              Stok: {product.stock}
            </span>
          )}
        </div>

        <p className="text-primary-600 font-bold text-xl">
          Rp {product.price.toLocaleString('id-ID')}
        </p>
      </Link>
    </motion.div>
  )
}
