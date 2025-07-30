'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Connect with trusted tradies
          </h1>
          
          {/* Search Form */}
          <div className="mt-8 max-w-2xl mx-auto">
            <h2 className="text-xl text-gray-700 mb-6">What do you need help with?</h2>
            <div className="flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g. plumber, electrician, painter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-r-md font-semibold hover:bg-orange-600 transition-colors flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                Go
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">33,000+</div>
              <div className="text-gray-600">Professional tradies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">4.8</div>
              <div className="text-gray-600">Average rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">4M+</div>
              <div className="text-gray-600">Australians connected</div>
            </div>
          </div>

          {/* Additional messaging */}
          <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 text-lg">
              Are you a tradie, running your own business?
            </p>
            <div className="mt-4 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a href="#" className="inline-block bg-gray-100 text-gray-800 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
                Connect with more local clients
              </a>
              <p className="text-gray-600">
                We send you job leads and you can manage them all in one app so you'll save time on admin.
              </p>
            </div>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                List your business
              </a>
              <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                How it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}