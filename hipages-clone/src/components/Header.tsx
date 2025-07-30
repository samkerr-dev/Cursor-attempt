'use client'

import { useState } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">hipages</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Directory
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Cost Guides
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Checklists
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Resources
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Calculators
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">Energy</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">AI assistant</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors">
              Get Quotes
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900">For Tradies</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Sign In</a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="#" className="block px-3 py-2 text-gray-700">Directory</a>
              <a href="#" className="block px-3 py-2 text-gray-700">Cost Guides</a>
              <a href="#" className="block px-3 py-2 text-gray-700">Checklists</a>
              <a href="#" className="block px-3 py-2 text-gray-700">Resources</a>
              <a href="#" className="block px-3 py-2 text-gray-700">Calculators</a>
              <a href="#" className="block px-3 py-2 text-gray-700">Energy</a>
              <a href="#" className="block px-3 py-2 text-gray-700">AI assistant</a>
              <div className="border-t border-gray-200 pt-4">
                <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-md font-semibold mb-2">
                  Get Quotes
                </button>
                <a href="#" className="block px-3 py-2 text-gray-700">For Tradies</a>
                <a href="#" className="block px-3 py-2 text-gray-700">Sign In</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}