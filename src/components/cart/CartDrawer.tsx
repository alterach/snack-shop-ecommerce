import { useCartStore } from '@/store/cartStore'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Dialog } from '@/components/ui/Dialog'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()
  const navigate = useNavigate()
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  const total = getTotalPrice()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckout = () => {
    setCheckoutLoading(true)
    const orderDetails = items
      .map(
        (item) => `- ${item.product.name} x${item.quantity} = Rp ${(
          item.product.price * item.quantity
        ).toLocaleString('id-ID')}`
      )
      .join('\n')

    const message = `Halo Snack Mama! Saya ingin pesan:\n\n${orderDetails}\n\n*Total: Rp ${total.toLocaleString('id-ID')}*\n\nMohon info pembayaran dan pengiriman ya!`

    setTimeout(() => {
      window.open(
        `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
        '_blank'
      )
      setCheckoutLoading(false)
      clearCart()
      onOpenChange(false)
      navigate('/')
    }, 500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange} title="Keranjang Belanja">
      <div className="flex h-full flex-col">
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <span className="text-6xl mb-4">🛒</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Keranjang kosong
            </h3>
            <p className="text-slate-600">
              Yuk cari jajanan yang bikin nagih!
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-4 p-4">
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4 bg-cream-50 rounded-2xl p-4"
                  >
                    <img
                      src={item.product.images[0] || '/images/placeholder.jpg'}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {item.product.name}
                      </h4>
                      <p className="text-primary-600 font-bold">
                        Rp {item.product.price.toLocaleString('id-ID')}
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-white hover:bg-cream-200 transition-colors shadow-sm"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-white hover:bg-cream-200 transition-colors shadow-sm"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="ml-auto p-1 rounded-full hover:bg-danger-100 text-danger-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 p-6 bg-cream-50">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold text-slate-900">
                  Total ({totalItems} item{totalItems !== 1 ? 's' : ''})
                </span>
                <span className="text-2xl font-bold text-primary-600">
                  Rp {total.toLocaleString('id-ID')}
                </span>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={checkoutLoading}
                className="w-full"
                variant="primary"
              >
                {checkoutLoading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12c0 2.21-.594 4.18-1.557 5.707l1.444 2.663A9.954 9.954 0 0016 12c0-5.523-4.477-10-10-10S2.477 2 8 2a9.954 9.954 0 00-8.444 4.63L.707 4.63z"
                      />
                    </svg>
                    Memproses...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span className="text-xl">💬</span>
                    Pesan via WhatsApp
                  </span>
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </Dialog>
  )
}
