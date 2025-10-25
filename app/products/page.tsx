'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/lib/data';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.categorie.trim() === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Equip</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-orange-500">Home</Link>
              <Link href="/products" className="text-orange-500 font-semibold">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
            </nav>
            <Link href="/admin" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Admin
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Heavy Equipment Catalog</h1>
          <p className="text-gray-600">Browse our extensive collection of {products.length} premium equipment</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name.trim()}>
                  {cat.name.trim()}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === 'All'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name.trim())}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === cat.name.trim()
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name.trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-600">No equipment found matching your criteria</p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-gray-600">
              Showing {filteredProducts.length} of {products.length} items
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
                      <div className="text-sm text-orange-500 font-semibold mb-2">{product.categorie}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">{product.year}</div>
                          <div className="text-xs text-gray-500">{product.condition}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Equip - Heavy Equipment Rental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
