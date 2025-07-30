import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          {/* About hipages */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg mr-4">
                <span className="text-white font-bold text-2xl">hi</span>
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                pages
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Who are hipages?</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    With a new job posted every 25 seconds on average, hipages connects Australians with trusted tradies to simplify home improvement.
                  </p>
                  <p>
                    Homeowners can find a smarter way to connect with local tradies to get the job done well.
                  </p>
                  <p>
                    Tradies can grow their business with quality leads from customers looking for a specific trade, and reduce their admin with included job management features.
                  </p>
                  <p>
                    Over four million Australians have changed the way they find, hire and manage trusted tradies with hipages, providing 33,000-plus tradies opportunities to win more work.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-300">1300 762 994</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-300">support@hipages.com.au</span>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                    <span className="text-gray-300">PO Box 2210, Strawberry Hills, NSW 2012</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mb-16">
            {/* Homeowners */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">Homeowners</h4>
              <ul className="space-y-3">
                {[
                  'Articles', 'FAQs', 'Licensing', 'Council regulations', 'Trust & quality',
                  'Job poster T&Cs', 'Browse all categories', 'Homes', 'hipages energy'
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">Company</h4>
              <ul className="space-y-3">
                {[
                  'About hipages Group', 'Careers at hipages', 'Meet the team',
                  'Contact us', 'Compliments and complaints'
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Businesses */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">Businesses</h4>
              <ul className="space-y-3">
                {[
                  'List your business', 'hipages tradiecore', 'How hipages works',
                  'Membership packages', 'Compare hipages', 'Compare hipages tradiecore',
                  'FAQs', 'Testimonials', 'Members login', 'Tradie terms', 'hipages energy'
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* App Downloads */}
            <div>
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-6 text-orange-400">For Homeowners</h4>
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4">
                  Get quotes
                </button>
                <p className="text-gray-300 text-sm mb-4">Get the app — and get it done</p>
                <div className="space-y-3">
                  <a href="#" className="block">
                    <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-3 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-gray-900 font-bold text-xs">🍎</span>
                        </div>
                        <div className="text-left">
                          <div className="text-xs text-gray-400">DOWNLOAD ON THE</div>
                          <div className="text-sm font-bold text-white">App Store</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="block">
                    <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-3 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-gray-900 font-bold text-xs">▶</span>
                        </div>
                        <div className="text-left">
                          <div className="text-xs text-gray-400">GET IT ON</div>
                          <div className="text-sm font-bold text-white">Google Play</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 text-orange-400">For Businesses</h4>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4">
                  List your business
                </button>
                <p className="text-gray-300 text-sm mb-4">Get the app — job leads straight to your phone</p>
                <div className="space-y-3">
                  <a href="#" className="block">
                    <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-3 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-gray-900 font-bold text-xs">🍎</span>
                        </div>
                        <div className="text-left">
                          <div className="text-xs text-gray-400">DOWNLOAD ON THE</div>
                          <div className="text-sm font-bold text-white">App Store</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="block">
                    <div className="bg-gray-800 hover:bg-gray-700 rounded-xl p-3 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-gray-900 font-bold text-xs">▶</span>
                        </div>
                        <div className="text-left">
                          <div className="text-xs text-gray-400">GET IT ON</div>
                          <div className="text-sm font-bold text-white">Google Play</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              <span>Tradies by Name · Trades by Business · Advertiser Login · Customer Support</span>
            </div>
            <div className="text-gray-400 text-sm text-center lg:text-right">
              hipages © 2025 — 
              <a href="#" className="hover:text-orange-400 transition-colors mx-1">Sitemap</a> · 
              <a href="#" className="hover:text-orange-400 transition-colors mx-1">Terms</a> · 
              <a href="#" className="hover:text-orange-400 transition-colors mx-1">Privacy</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-gray-500 text-sm">Partner sites: </span>
            <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors text-sm">builderscrack.co.nz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}