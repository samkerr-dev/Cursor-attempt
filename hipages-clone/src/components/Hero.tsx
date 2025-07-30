'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, StarIcon, CheckCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-yellow-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Connect with{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              trusted tradies
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Australia's #1 marketplace connecting homeowners with verified professionals. 
            Get quotes in minutes, not days.
          </p>

          {/* Enhanced Search Form */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">What do you need help with?</h2>
            
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 border border-gray-100">
              <div className="flex flex-col lg:flex-row">
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-6 text-lg border-0 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 placeholder-gray-400"
                    placeholder="e.g. plumber, electrician, painter, kitchen renovation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 lg:ml-2 mt-2 lg:mt-0">
                  Get Free Quotes
                </button>
              </div>
            </div>

            {/* Popular searches */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 mb-3">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Electrician', 'Plumber', 'Painter', 'Handyman', 'Cleaner'].map((term) => (
                  <button
                    key={term}
                    className="bg-white text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators with enhanced design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-full">
                  <UserGroupIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">33,000+</div>
              <div className="text-gray-600 font-medium">Professional tradies</div>
              <div className="text-sm text-gray-500 mt-2">Verified & licensed</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-full">
                  <StarIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-gray-900">4.8</span>
                <div className="flex ml-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="h-6 w-6 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="text-gray-600 font-medium">Average rating</div>
              <div className="text-sm text-gray-500 mt-2">Based on 500k+ reviews</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full">
                  <CheckCircleIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4M+</div>
              <div className="text-gray-600 font-medium">Australians connected</div>
              <div className="text-sm text-gray-500 mt-2">Jobs completed successfully</div>
            </div>
          </div>

          {/* Tradie CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Are you a tradie running your own business?
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Join 33,000+ professionals getting quality leads every day. 
                  We send you job leads and help you manage everything in one app.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    List your business
                  </button>
                  <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-orange-500 hover:bg-orange-500 transition-all duration-200">
                    How it works
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">100k+</div>
                  <div className="text-gray-300 text-sm">Monthly jobs</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">25 sec</div>
                  <div className="text-gray-300 text-sm">Avg job posting</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">$2.5B+</div>
                  <div className="text-gray-300 text-sm">Work completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">20+ years</div>
                  <div className="text-gray-300 text-sm">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}