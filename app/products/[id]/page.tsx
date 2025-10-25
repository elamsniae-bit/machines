import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.categorie === product.categorie && p.id !== product.id)
    .slice(0, 3);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96 lg:h-[600px]">
              <Image
                src={`/products/${product.image}`}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                {product.categorie}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="text-5xl font-bold text-orange-500 mb-6">{product.price}</div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-600 font-semibold">Brand:</span>
                <span className="text-gray-900">{product.brand}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-600 font-semibold">Model:</span>
                <span className="text-gray-900">{product.model}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-600 font-semibold">Year:</span>
                <span className="text-gray-900">{product.year}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-600 font-semibold">Condition:</span>
                <span className="text-gray-900 capitalize">{product.condition}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-600 font-semibold">Weight:</span>
                <span className="text-gray-900">{product.weight}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition">
                Request Quote
              </button>
              <button className="w-full border border-orange-500 text-orange-500 py-4 rounded-lg font-semibold hover:bg-orange-50 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} href={`/products/${related.id}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={`/products/${related.image}`}
                        alt={related.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500">
                        {related.name}
                      </h3>
                      <p className="text-2xl font-bold text-orange-500">{related.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
