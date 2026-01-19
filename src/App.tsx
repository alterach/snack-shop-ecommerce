import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { CartDrawer } from './components/cart/CartDrawer'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

function Layout() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-cream-50 font-sans">
      <ScrollRestoration />
      <Header setCartOpen={setCartOpen} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
