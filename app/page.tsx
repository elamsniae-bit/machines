import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/lib/data';

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Equip</h1>
              <span className="text-sm text-gray-600">Heavy Equipment Rental</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-orange-500">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-orange-500">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
            </nav>
            <Link href="/admin" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Admin
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-orange-100 mb-2">Welcome to heavyquips</p>
            <h2 className="text-5xl font-bold mb-4">Premium Caterpillars and Expert Lumberjack.</h2>
            <h3 className="text-6xl font-extrabold mb-6">No Compromise.</h3>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Explore our high-quality caterpillars and durable lumberjack tools, designed for precision, performance, and reliability in every task
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-white text-orange-500 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition"
            >
              Access your account →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className="bg-gray-100 hover:bg-orange-100 p-4 rounded-lg text-center transition"
              >
                <p className="font-semibold text-gray-800">{category.name.trim()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Featured Equipment</h3>
            <Link href="/products" className="text-orange-500 hover:text-orange-600 font-semibold">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={`/products/${product.image}`}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-600 mb-2">{product.categorie}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500">{product.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{product.brand} • {product.year}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                      <span className="text-sm text-gray-500">{product.condition}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Equip</h4>
              <p className="text-gray-400">Premium heavy equipment rental and sales</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">1249 N Homestead Rd, North Platte, NE 69101</p>
              <p className="text-gray-400">+1(406) 505-9795</p>
              <p className="text-gray-400">support@heavyquips.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/products" className="block text-gray-400 hover:text-white">Products</Link>
                <Link href="/about" className="block text-gray-400 hover:text-white">About Us</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Equip - Heavy Equipment Rental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
