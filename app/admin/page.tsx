'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/lib/data';
import { useState } from 'react';

export default function AdminDashboard() {
  const [view, setView] = useState<'products' | 'categories' | 'overview'>('overview');
  
  const stats = {
    totalProducts: products.length,
    totalCategories: categories.length,
    usedEquipment: products.filter(p => p.condition === 'used').length,
    newEquipment: products.filter(p => p.condition === 'new' || p.condition === 'used/New').length,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Equip Admin Dashboard</h1>
              <p className="text-gray-400 text-sm">Heavy Equipment Management System</p>
            </div>
            <Link href="/" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              ← Back to Site
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8 flex space-x-2 bg-white p-2 rounded-lg shadow">
          <button
            onClick={() => setView('overview')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${
              view === 'overview'
                ? 'bg-orange-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setView('products')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${
              view === 'products'
                ? 'bg-orange-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Products ({products.length})
          </button>
          <button
            onClick={() => setView('categories')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${
              view === 'categories'
                ? 'bg-orange-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Categories ({categories.length})
          </button>
        </div>

        {/* Overview */}
        {view === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-600 text-sm font-semibold mb-2">Total Products</div>
                <div className="text-4xl font-bold text-orange-500">{stats.totalProducts}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-600 text-sm font-semibold mb-2">Categories</div>
                <div className="text-4xl font-bold text-blue-500">{stats.totalCategories}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-600 text-sm font-semibold mb-2">Used Equipment</div>
                <div className="text-4xl font-bold text-green-500">{stats.usedEquipment}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-600 text-sm font-semibold mb-2">New Equipment</div>
                <div className="text-4xl font-bold text-purple-500">{stats.newEquipment}</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Category Distribution</h2>
              <div className="space-y-3">
                {categories.map((category) => {
                  const count = products.filter(p => p.categorie.trim() === category.name.trim()).length;
                  const percentage = (count / products.length) * 100;
                  return (
                    <div key={category.id}>
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold">{category.name.trim()}</span>
                        <span className="text-gray-600">{count} items ({percentage.toFixed(1)}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-orange-500 h-3 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Products List */}
        {view === 'products' && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold">Equipment Inventory</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Brand</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="relative w-16 h-16 bg-gray-200 rounded">
                          <Image
                            src={`/products/${product.image}`}
                            alt={product.name}
                            fill
                            sizes="64px"
                            className="object-cover rounded"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.model}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.categorie}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.brand}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-orange-500">{product.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.year}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Link
                          href={`/products/${product.id}`}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          View
                        </Link>
                        <button className="text-orange-600 hover:text-orange-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Categories List */}
        {view === 'categories' && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Equipment Categories</h2>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  + Add Category
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {categories.map((category) => {
                const count = products.filter(p => p.categorie.trim() === category.name.trim()).length;
                return (
                  <div key={category.id} className="border rounded-lg p-6 hover:shadow-lg transition">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{category.name.trim()}</h3>
                        <p className="text-gray-600 text-sm">{count} products</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-orange-600 hover:text-orange-900 text-sm">Edit</button>
                        <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                      </div>
                    </div>
                    <Link
                      href={`/products?category=${encodeURIComponent(category.name)}`}
                      className="text-blue-600 hover:text-blue-900 text-sm"
                    >
                      View Products →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
