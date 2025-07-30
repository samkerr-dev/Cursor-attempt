export default function Articles() {
  const articles = [
    {
      category: 'Renovation',
      title: "Here's how you could save on your reno",
      description: 'Save thousands on the things you need to renovate or maintain your dream home.',
      link: 'Find out how'
    },
    {
      category: 'Bathroom Renovation',
      title: 'How Much Does An Average Bathroom Renovation Cost? [2025]',
      description: 'You can spend anywhere from $8,000 to $35,000 or more on a bathroom renovation, depending on the size of your bathroom, and how much your materials costs are.',
      link: 'Read Article'
    },
    {
      category: 'Windows',
      title: '10 bay window ideas for your home',
      description: 'Looking for some inspiration and bay window ideas? Discover how to decorate your bay window with hipages today.',
      link: 'Read Article'
    },
    {
      category: 'Pool Fencing',
      title: 'How Much Does Glass Pool Fencing Cost? [2025]',
      description: 'Glass pool fencing allows you to have a view of your pool, but how much does it cost? Glass pool fencing can be expensive, but there are ways to minimise the cost.',
      link: 'Read Article'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Featured Article */}
          <div className="bg-orange-100 rounded-lg p-8">
            <div className="text-orange-600 text-sm font-semibold mb-2">
              {articles[0].category}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {articles[0].title}
            </h3>
            <p className="text-gray-700 mb-6">
              {articles[0].description}
            </p>
            <a href="#" className="text-orange-600 font-semibold hover:text-orange-700">
              {articles[0].link}
            </a>
          </div>

          {/* Article List */}
          <div className="space-y-6">
            {articles.slice(1).map((article, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-orange-600 text-sm font-semibold mb-2">
                  {article.category}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>
                <a href="#" className="text-orange-600 font-semibold hover:text-orange-700 text-sm">
                  {article.link}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* View all articles */}
        <div className="mt-12 text-center">
          <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
            View all articles
          </a>
        </div>
      </div>
    </section>
  )
}