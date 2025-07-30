import { ShieldCheckIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function Partners() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            hipages helps some of the biggest brands in Australia find quality tradies 
            and deliver exceptional home improvement experiences.
          </p>
        </div>

        {/* Partner logos */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100 mb-16">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-3xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                IKEA
              </div>
              <p className="text-center text-gray-500 text-sm mt-3">Home Furnishings</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-12 py-6 rounded-2xl font-bold text-3xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                Bunnings
              </div>
              <p className="text-center text-gray-500 text-sm mt-3">Hardware & Building</p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <ShieldCheckIcon className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                All our partner tradies undergo rigorous verification processes to ensure 
                they meet the highest standards of quality and professionalism.
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                  <TrophyIcon className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Award Winning</h3>
              <p className="text-gray-600 leading-relaxed">
                Recognized as Australia's leading marketplace connecting homeowners 
                with trusted tradespeople for over 20 years.
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg">
                  <UsersIcon className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nationwide Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Our extensive network spans across Australia, connecting major brands 
                with skilled professionals in every city and region.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Partner with hipages</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Australia's most trusted brands who rely on hipages to connect with 
            quality tradespeople and deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Become a Partner
            </button>
            <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-orange-500 hover:bg-orange-500 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}