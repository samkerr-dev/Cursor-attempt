'use client'

import { useState } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-xl">hi</span>
              </div>
              <span className="ml-2 text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                pages
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-orange-50 transition-all duration-200">
                Directory
                <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {/* Dropdown placeholder */}
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">All Categories</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Popular Trades</a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-orange-50 transition-all duration-200">
                Cost Guides
                <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-orange-50 transition-all duration-200">
                Checklists
                <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-orange-50 transition-all duration-200">
                Resources
                <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-orange-50 transition-all duration-200">
                Calculators
                <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>
            
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-orange-50 transition-all duration-200">
              Energy
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-orange-50 transition-all duration-200">
              AI assistant
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Quotes
            </button>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200">
              For Tradies
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200">
              Sign In
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-orange-600 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200">
                Directory
              </a>
              <a href="#" className="block text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200">
                Cost Guides
              </a>
              <a href="#" className="block text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200">
                Checklists
              </a>
              <a href="#" className="block text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200">
                Resources
              </a>
              <a href="#" className="block text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200">
                Calculators
              </a>
              <a href="#" className="block text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200">
                Energy
              </a>
              <a href="#" className="block text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200">
                AI assistant
              </a>
              
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                  Get Quotes
                </button>
                <a href="#" className="block text-center text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200">
                  For Tradies
                </a>
                <a href="#" className="block text-center text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}