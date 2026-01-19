import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { ProductCard } from '@/components/products/ProductCard'

export function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#fdf8f6] overflow-hidden pt-20">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent-100 rounded-full blur-[100px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary-100 rounded-full blur-[80px] opacity-60 -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-primary-100 text-primary-900 text-sm font-medium tracking-widest uppercase mb-6">
              Artisanal Snacks & Treats
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-950 mb-6 leading-[1.1]">
              Taste the <span className="text-primary-500 italic">Passion</span> in Every Bite.
            </h1>
            <p className="text-xl text-primary-700/80 mb-10 max-w-lg leading-relaxed font-light">
              Handcrafted daily with premium ingredients. Experience the perfect blend of tradition and modern flavor profiles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary flex items-center gap-3 group">
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-cream-200" />
                ))}
              </div>
              <div>
                <div className="flex text-accent-500 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm text-primary-800 font-medium">Loved by 1000+ happy customers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-12">
                <div className="aspect-[3/4] rounded-2xl bg-white shadow-xl overflow-hidden">
                   <img src="/images/hero-1.jpg" className="w-full h-full object-cover" alt="" /> 
                </div>
                <div className="aspect-square rounded-2xl bg-primary-900 p-6 text-white flex flex-col justify-center text-center">
                   <span className="text-4xl font-serif mb-2">100%</span>
                   <span className="text-sm uppercase tracking-widest opacity-80">Natural Ingredients</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-accent-300 p-6 flex flex-col justify-center text-center">
                   <span className="text-4xl font-serif mb-2 text-primary-900">24h</span>
                   <span className="text-sm uppercase tracking-widest text-primary-900 opacity-80">Fresh Delivery</span>
                </div>
                <div className="aspect-[3/4] rounded-2xl bg-white shadow-xl overflow-hidden">
                   <img src="/images/hero-2.jpg" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary-950 mb-4">Curated Favorites</h2>
              <p className="text-primary-600/80 max-w-md">Explore our most loved handcrafted snacks, made fresh daily for the ultimate taste experience.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-primary-900 font-medium hover:text-primary-600 transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/products" className="btn-secondary inline-flex">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Categories / Collections */}
      <section className="py-24 bg-cream-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-primary-950 text-center mb-16">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Keripik', icon: '🥔', color: 'bg-amber-100' },
              { name: 'Brownies', icon: '🍫', color: 'bg-stone-200' },
              { name: 'Puding', icon: '🍮', color: 'bg-rose-100' },
              { name: 'Es Gabus', icon: '🧊', color: 'bg-sky-100' },
              { name: 'Pastel', icon: '🥟', color: 'bg-orange-100' },
              { name: 'Lainnya', icon: '🍪', color: 'bg-emerald-100' }
            ].map((cat) => (
              <Link 
                key={cat.name}
                to={`/products?category=${cat.name.toLowerCase().replace(' ', '-')}`}
                className="group block"
              >
                <div className={`aspect-square rounded-full ${cat.color} mb-4 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                  {cat.icon}
                </div>
                <h3 className="text-center font-medium text-primary-900 group-hover:text-primary-600 transition-colors">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter / CTA */}
      <section className="py-24 bg-primary-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat opacity-5" />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <span className="text-accent-300 tracking-widest uppercase text-sm font-bold mb-4 block">Join our Community</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Get Sweet Updates</h2>
          <p className="text-primary-100 mb-10 text-lg font-light">Subscribe to our newsletter for exclusive offers, new product announcements, and behind-the-scenes stories.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-colors backdrop-blur-sm"
            />
            <button className="px-8 py-4 rounded-full bg-white text-primary-900 font-bold hover:bg-accent-50 transition-colors shadow-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
