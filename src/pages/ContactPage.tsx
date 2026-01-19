import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { storeInfo } from '@/data/products'
import { Button } from '@/components/ui/Button'

export function ContactPage() {
  return (
    <div className="min-h-screen bg-cream-50 pb-16">
      <div className="container-custom py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12"
        >
          Hubungi Kami
        </motion.h1>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-soft"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary-600" />
                Lokasi
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                {storeInfo.address}
              </p>
              <div className="mt-6 bg-cream-100 rounded-2xl p-4">
                <p className="text-sm text-slate-600">
                  📍 Tersedia untuk pengambilan langsung (self-pickup) dan pengiriman
                  area terdekat
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-soft"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary-600" />
                Jam Operasional
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Senin - Jumat</span>
                  <span className="text-slate-900 font-bold">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Sabtu</span>
                  <span className="text-slate-900 font-bold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Minggu</span>
                  <span className="text-primary-600 font-bold">Tutup</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-soft"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Kontak Langsung
              </h2>
              <div className="space-y-4">
                <a
                  href={`tel:${storeInfo.whatsapp}`}
                  className="flex items-center gap-4 p-4 bg-cream-50 rounded-2xl hover:bg-cream-100 transition-colors"
                >
                  <Phone className="h-6 w-6 text-primary-600" />
                  <div>
                    <p className="text-sm text-slate-600">Telepon / WhatsApp</p>
                    <p className="font-bold text-slate-900">{storeInfo.whatsapp}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors"
                >
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-sm text-green-700">WhatsApp</p>
                    <p className="font-bold text-green-900">Chat Sekarang</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-br from-primary-500 to-accent-400 rounded-2xl text-white">
                <h3 className="font-bold text-lg mb-2">Pesan Sekarang!</h3>
                <p className="text-sm opacity-90">
                  Pesanan Anda akan diproses secepat mungkin. Kami akan mengirimkan
                  konfirmasi dan detail pengiriman melalui WhatsApp.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-soft"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary-600" />
                Kirim Pesan
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input type="text" className="input-field" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <Button className="w-full" variant="primary">
                  Kirim Pesan
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
