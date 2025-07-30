export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* About hipages */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Who are hipages?</h3>
          <p className="text-gray-300 max-w-4xl">
            With a new job posted every 25 seconds on average, hipages connects Australians with trusted tradies to simplify home improvement.
          </p>
          <br />
          <p className="text-gray-300 max-w-4xl">
            Homeowners can find a smarter way to connect with local tradies to get the job done well.
          </p>
          <br />
          <p className="text-gray-300 max-w-4xl">
            Tradies can grow their business with quality leads from customers looking for a specific trade, and reduce their admin with included job management features.
          </p>
          <br />
          <p className="text-gray-300 max-w-4xl">
            Over four million Australians have changed the way they find, hire and manage trusted tradies with hipages, providing 33,000-plus tradies opportunities to win more work.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Homeowners */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Homeowners</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Articles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Licensing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Council regulations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Trust & quality</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Job poster T&Cs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Browse all categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Homes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">hipages energy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About hipages Group</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers at hipages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Meet the team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Compliments and complaints</a></li>
            </ul>
          </div>

          {/* Businesses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Businesses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">List your business</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">hipages tradiecore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">How hipages works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Membership packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Compare hipages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Compare hipages tradiecore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Members login</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Tradie terms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">hipages energy</a></li>
            </ul>
          </div>

          {/* App Downloads */}
          <div>
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">For Homeowners</h4>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors mb-4 block">
                Get quotes
              </button>
              <p className="text-gray-300 text-sm mb-2">Get the app — and get it done</p>
              <div className="space-y-2">
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">Download on the App Store</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">Get it on Google Play</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Businesses</h4>
              <button className="bg-gray-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition-colors mb-4 block">
                List your business
              </button>
              <p className="text-gray-300 text-sm mb-2">Get the app — job leads straight to your phone</p>
              <div className="space-y-2">
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">Download on the App Store</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">Get it on Google Play</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <span>Tradies by Name · Trades by Business · Advertiser Login · Customer Support</span>
            </div>
            <div className="text-gray-300 text-sm">
              hipages © 2025 — <a href="#" className="hover:text-white">Sitemap</a> · <a href="#" className="hover:text-white">Terms</a> · <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-gray-400 text-sm">Partner sites: builderscrack.co.nz</span>
          </div>
        </div>
      </div>
    </footer>
  )
}