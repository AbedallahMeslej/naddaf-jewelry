import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BottomBar from './components/BottomBar'
import FeaturedProducts from './components/FeaturedProducts'
import PromoBanner from './components/PromoBanner'
import WhyUs from './components/WhyUs'
import BestSellers from './components/BestSellers'
import WhyChooseUs from './components/WhyChooseUs'
import NewArrivals from './components/NewArrivals'
import Footer from './components/Footer'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import WishlistPage from './pages/WishlistPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ShippingPage from './pages/ShippingPage'
import ProfilePage from './pages/ProfilePage'
import TrackOrderPage from './pages/TrackOrderPage'
import AdminPage from './pages/AdminPage'
function HomePage() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <FeaturedProducts />
      <BestSellers />
      <PromoBanner />
      <WhyUs />
      <WhyChooseUs />
      <Footer />
    </>
  )
}

export default function AppMain() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>
      <Navbar />
      <div className="pb-20 md:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
      <BottomBar />
    </div>
  )
}