import { motion } from 'framer-motion'
import { storeInfo } from '@/data/products'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 pb-16">
      <div className="container-custom py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12"
        >
          Tentang {storeInfo.name}
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-soft"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">👩‍🍳</span>
              Cerita Kami
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              {storeInfo.name} berdiri dengan satu misi sederhana: menyajikan jajanan rumahan
              berkualitas tinggi dengan rasa yang bikin nagih. Setiap produk dibuat dengan penuh cinta,
              menggunakan bahan-bahan segar pilihan, dan resep tradisional yang terjaga.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              Dapur kami buka setiap pagi, memastikan semua jajanan yang sampai ke tangan Anda selalu
              segar dan renyah. Mulai dari keripik yang digoreng dengan hati-hati, hingga
              brownies yang dibuat dengan coklat premium.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-soft"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">✨</span>
              Kenapa Memilih Kami?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="text-4xl">🥬</span>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Bahan Segar
                  </h3>
                  <p className="text-slate-600">
                    Kami hanya menggunakan bahan-bahan segar pilihan setiap hari
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-4xl">👨‍👩‍👧‍👦</span>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Homemade
                  </h3>
                  <p className="text-slate-600">
                    Dibuat dengan tangan dan cinta, tanpa bahan pengawet
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-4xl">⚡</span>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Pengiriman Cepat
                  </h3>
                  <p className="text-slate-600">
                    Pesanan diproses dan dikirim di hari yang sama
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-4xl">💝</span>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Rasa Otentik
                  </h3>
                  <p className="text-slate-600">
                    Resep tradisional yang terjaga selama bertahun-tahun
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-primary-500 to-accent-400 rounded-3xl p-8 shadow-soft text-white"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Dibuat dengan 💖 untuk Anda!
            </h2>
            <p className="text-center text-lg leading-relaxed">
              Terima kasih sudah mendukung usaha kecil kami. Setiap pesanan Anda adalah
              semangat untuk kami terus belajar dan berkarya.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
