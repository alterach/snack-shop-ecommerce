import { Instagram, Facebook, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍪</span>
              <span className="text-2xl font-bold text-primary-400">Snack Mama</span>
            </div>
            <p className="text-slate-400">
              Jajanan rumahan dengan rasa yang bikin nagih! Dibuat dengan cinta dan bahan-bahan pilihan.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-400 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="/products" className="text-slate-400 hover:text-white transition-colors">Produk</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-white transition-colors">Tentang</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-600 hover:bg-primary-500 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-slate-400 text-sm">
              📍 Jl. Raya No. 123, Indonesia
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          © 2026 Snack Mama. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
