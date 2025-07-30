import { MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Categories() {
  const cities = [
    {
      name: 'Sydney',
      trades: ['Electricians', 'Plumbers', 'Painters', 'Concreting', 'Pest Control'],
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      icon: '🏙️'
    },
    {
      name: 'Melbourne',
      trades: ['Electricians', 'Plumbers', 'Painters', 'Concreting', 'House Cleaning'],
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      icon: '🌆'
    },
    {
      name: 'Brisbane',
      trades: ['Electricians', 'Pest Control', 'Air Conditioning', 'Handyman', 'House Cleaning'],
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      icon: '🌴'
    },
    {
      name: 'Adelaide',
      trades: ['Builders', 'Electricians', 'Concreting', 'Air Conditioning', 'Handyman'],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      icon: '🏛️'
    },
    {
      name: 'Perth',
      trades: ['Electricians', 'Plumbers', 'Concreting', 'Tilers', 'Air Conditioning'],
      gradient: 'from-teal-500 to-teal-600',
      bgGradient: 'from-teal-50 to-teal-100',
      icon: '🏖️'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Categories
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Explore hipages top categories
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find trusted tradespeople in Australia's major cities. From electricians to builders, 
            we've got you covered wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {cities.map((city, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${city.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50`}>
                {/* City header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{city.icon}</div>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${city.gradient} shadow-lg mb-4`}>
                    <MapPinIcon className="h-5 w-5 text-white mr-2" />
                    <span className="text-white font-bold text-lg">{city.name}</span>
                  </div>
                </div>

                {/* Trades list */}
                <ul className="space-y-3">
                  {city.trades.map((trade, tradeIndex) => (
                    <li key={tradeIndex}>
                      <a 
                        href="#" 
                        className="group/trade flex items-center justify-between p-3 rounded-xl bg-white/70 hover:bg-white hover:shadow-md transition-all duration-200 text-gray-700 hover:text-gray-900"
                      >
                        <span className="font-medium">{trade}</span>
                        <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover/trade:opacity-100 transform translate-x-0 group-hover/trade:translate-x-1 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>

                {/* View more button */}
                <div className="mt-6 text-center">
                  <button className={`inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r ${city.gradient} text-white font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5`}>
                    View All
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular categories showcase */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Categories</h3>
            <p className="text-lg text-gray-600">The trades Australians need most</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Electricians', icon: '⚡', count: '8,500+' },
              { name: 'Plumbers', icon: '🔧', count: '7,200+' },
              { name: 'Painters', icon: '🎨', count: '6,800+' },
              { name: 'Builders', icon: '🏗️', count: '5,400+' },
              { name: 'Cleaners', icon: '🧽', count: '4,900+' },
              { name: 'Handyman', icon: '🔨', count: '4,200+' }
            ].map((category, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:from-orange-50 hover:to-orange-100 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{category.name}</h4>
                  <p className="text-sm text-gray-500">{category.count} tradies</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Can't find what you're looking for?</h3>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              We have over 1,800 categories of tradespeople ready to help with any job, big or small.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View All Categories
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200">
                Post Your Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}