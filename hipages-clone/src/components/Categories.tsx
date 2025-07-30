export default function Categories() {
  const cities = [
    {
      name: 'Sydney',
      trades: ['Electricians', 'Plumbers', 'Painters', 'Concreting', 'Pest Control']
    },
    {
      name: 'Melbourne',
      trades: ['Electricians', 'Plumbers', 'Painters', 'Concreting', 'House Cleaning']
    },
    {
      name: 'Brisbane',
      trades: ['Electricians', 'Pest Control', 'Air Conditioning', 'Handyman', 'House Cleaning']
    },
    {
      name: 'Adelaide',
      trades: ['Builders', 'Electricians', 'Concreting', 'Air Conditioning', 'Handyman']
    },
    {
      name: 'Perth',
      trades: ['Electricians', 'Plumbers', 'Concreting', 'Tilers', 'Air Conditioning']
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Categories
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800">
            Explore hipages top categories
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {cities.map((city, index) => (
            <div key={index} className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {city.name}
              </h4>
              <ul className="space-y-2">
                {city.trades.map((trade, tradeIndex) => (
                  <li key={tradeIndex}>
                    <a 
                      href="#" 
                      className="text-orange-500 hover:text-orange-600 hover:underline"
                    >
                      {trade}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
            View all Categories
          </a>
        </div>
      </div>
    </section>
  )
}