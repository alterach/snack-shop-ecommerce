import { Product } from '@/types'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plus, Check } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { toast } from 'sonner'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const [isAdded, setIsAdded] = useState(false)

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product, 1)
    setIsAdded(true)
    
    toast.success(`${product.name} ditambahkan ke keranjang`, {
      icon: '🛒',
    })
    
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="snack-card group relative"
    >
      <Link to={`/product/${product.id}`} className="block h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-[4/5] bg-cream-100 rounded-xl overflow-hidden mb-4">
          <img
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Badge */}
          {product.featured && (
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary-900 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
              Best Seller
            </span>
          )}

          {/* Quick Add Button - Appears on Hover */}
          <button
            onClick={handleQuickAdd}
            disabled={isAdded}
            className={`absolute bottom-3 right-3 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-primary-900 hover:bg-primary-900 hover:text-white'
            }`}
            aria-label="Add to cart"
          >
            {isAdded ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-serif font-bold text-lg text-primary-950 leading-tight group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
          </div>
          
          <p className="text-sm text-primary-500/80 mb-3 line-clamp-2 font-sans">
            {product.description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-primary-100 pt-3">
            <span className="text-lg font-medium text-primary-900">
              Rp {product.price.toLocaleString('id-ID')}
            </span>
            <span className="text-xs text-primary-400 font-medium uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
