import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-24 md:py-32"
          style={{
            backgroundImage: 'url("/hero-pattern.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-white/90 mb-4 text-lg">Welcome to Equip Heavy Equipment</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Equipment Solutions.
                <br />
                <span className="text-5xl md:text-7xl">No Compromise.</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Explore our high-quality heavy equipment designed for precision, performance, and reliability in every task
              </p>
              <Link 
                href="/products" 
                className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg"
              >
                Browse Equipment →
              </Link>
            </div>
          </div>
        </section>

        {/* Reliability Cards Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Unmatched Reliability<br />For Every Project.
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional-grade equipment with the support you need to get the job done right
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-500 transition shadow-sm hover:shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excavator</h3>
                <p className="text-gray-600 mb-4">Heavy-duty excavators for all your digging needs</p>
                <Link href="/products?category=Excavators" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-500 transition shadow-sm hover:shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bulldozer</h3>
                <p className="text-gray-600 mb-4">Powerful bulldozers for earthmoving projects</p>
                <Link href="/products?category=Bulldozers" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-500 transition shadow-sm hover:shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compactor</h3>
                <p className="text-gray-600 mb-4">Professional compactors for soil stabilization</p>
                <Link href="/products?category=Compactors" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-500 transition shadow-sm hover:shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Crane</h3>
                <p className="text-gray-600 mb-4">Versatile cranes for lifting operations</p>
                <Link href="/products?category=Crane Trucks" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Excellence Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/products/1734976639excavator1.webp"
                  alt="Heavy Equipment"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Excellence in Mega Equipment Rentals.
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  With over a decade of experience, we provide top-tier heavy equipment rental services to construction companies, contractors, and project managers worldwide.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-900 text-white rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">100+</div>
                    <div className="text-sm">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900 text-white rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
                    <div className="text-sm">Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900 text-white rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
                    <div className="text-sm">Quality</div>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experts Section */}
        <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(45deg, #f97316 25%, transparent 25%), linear-gradient(-45deg, #f97316 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f97316 75%), linear-gradient(-45deg, transparent 75%, #f97316 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Experts in Mega Equipment Solutions.
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our team of certified professionals ensures you get the right equipment for your specific needs, backed by comprehensive support and maintenance services.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Certified Equipment</h3>
                      <p className="text-gray-400">All equipment is regularly inspected and certified</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">24/7 Support</h3>
                      <p className="text-gray-400">Round-the-clock technical support and assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Global Delivery</h3>
                      <p className="text-gray-400">Worldwide shipping and on-site delivery options</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
                    <div className="text-sm">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
                    <div className="text-sm">Certified</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
                    <div className="text-sm">Trusted</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/products/1734976766excavator3.webp"
                    alt="Equipment 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/products/1734976675bulldozer2.webp"
                    alt="Equipment 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Confidence Speaks.</h2>
              <p className="text-gray-600">What our customers say about our equipment and service</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Outstanding equipment quality and exceptional service. The rental process was smooth and the equipment exceeded our expectations."
                </p>
                <div className="font-semibold text-gray-900">John Stevens</div>
                <div className="text-sm text-gray-500">Construction Manager</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Reliable, professional, and always available. This is our go-to for heavy equipment rentals on all our projects."
                </p>
                <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                <div className="text-sm text-gray-500">Project Director</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The best in the business. Quality equipment and amazing support team. Highly recommended for any scale project."
                </p>
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="text-sm text-gray-500">Site Supervisor</div>
              </div>
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products?category=${encodeURIComponent(category.name)}`}
                  className="bg-gray-100 hover:bg-orange-500 hover:text-white p-6 rounded-lg text-center transition group"
                >
                  <p className="font-semibold text-gray-800 group-hover:text-white">{category.name.trim()}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Choose Quality Section */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Choose Quality,<br />Choose Us!</h2>
                <p className="text-white/90 mb-8 text-lg">
                  When you choose Equip, you're choosing excellence, reliability, and unmatched customer service. Our commitment to quality ensures your project success.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="flex-shrink-0" />
                    <span>Premium quality equipment from leading manufacturers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="flex-shrink-0" />
                    <span>Competitive pricing with flexible rental terms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="flex-shrink-0" />
                    <span>Expert guidance and professional support</span>
                  </li>
                </ul>
                <Link
                  href="/products"
                  className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-bold"
                >
                  Explore Equipment
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Quick Answers, Quick Solutions.</h3>
                <div className="space-y-4">
                  <div className="bg-white text-gray-900 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">How do I rent equipment?</h4>
                    <p className="text-sm text-gray-600">Browse our catalog, select your equipment, choose rental period, and complete checkout.</p>
                  </div>
                  <div className="bg-white text-gray-900 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">What payment methods do you accept?</h4>
                    <p className="text-sm text-gray-600">We accept bank transfers, cryptocurrency, and major payment processors.</p>
                  </div>
                  <div className="bg-white text-gray-900 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Do you offer delivery?</h4>
                    <p className="text-sm text-gray-600">Yes, we provide worldwide delivery and on-site setup services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Knowledge Blog Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Unlock Industry Knowledge</h2>
              <p className="text-gray-600">Latest insights and tips for heavy equipment operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image
                    src="/products/1734976639excavator1.webp"
                    alt="Blog 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-orange-600 font-semibold text-sm">EQUIPMENT GUIDES</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    Choosing the Right Excavator for Your Project
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to select the perfect excavator based on your project requirements...
                  </p>
                  <Link href="/blog/excavator-guide" className="text-orange-600 font-semibold hover:text-orange-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image
                    src="/products/1734976675bulldozer2.webp"
                    alt="Blog 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-orange-600 font-semibold text-sm">MAINTENANCE TIPS</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    Essential Bulldozer Maintenance Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Keep your bulldozer running at peak performance with our maintenance guide...
                  </p>
                  <Link href="/blog/maintenance" className="text-orange-600 font-semibold hover:text-orange-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image
                    src="/products/1734976723dumptruck2.webp"
                    alt="Blog 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-orange-600 font-semibold text-sm">SAFETY</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    Safety Best Practices for Heavy Equipment Operation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ensure workplace safety with these critical heavy equipment operation guidelines...
                  </p>
                  <Link href="/blog/safety" className="text-orange-600 font-semibold hover:text-orange-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
