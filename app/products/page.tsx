'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/lib/data';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaShoppingCart, FaCalendar } from 'react-icons/fa';

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
      <Header />

      <div className="pt-16">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Heavy Equipment Catalog</h1>
            <p className="text-white/90">Browse our extensive collection of {products.length} premium equipment</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition"
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
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === 'All'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Equipment
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name.trim())}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedCategory === cat.name.trim()
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.name.trim()}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-600">No equipment found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 text-gray-600 font-semibold">
                Showing {filteredProducts.length} of {products.length} items
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <Link href={`/products/${product.id}`}>
                      <div className="relative h-64 bg-gray-200">
                        <Image
                          src={`/products/${product.image}`}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {product.condition}
                        </div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <Link href={`/products/${product.id}`}>
                        <div className="text-sm text-orange-500 font-semibold mb-2">{product.categorie}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">{product.brand} • {product.year}</p>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <div className="text-2xl font-bold text-orange-500 mb-4">{product.price}</div>
                      </Link>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href={`/checkout?id=${product.id}&type=buy`}
                          className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
                        >
                          <FaShoppingCart />
                          <span>BUY</span>
                        </Link>
                        <Link
                          href={`/checkout?id=${product.id}&type=rent`}
                          className="flex items-center justify-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition font-semibold"
                        >
                          <FaCalendar />
                          <span>RENT</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
