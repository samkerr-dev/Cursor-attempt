import { ArrowRightIcon, BookOpenIcon, CalculatorIcon } from '@heroicons/react/24/outline'

export default function Articles() {
  const articles = [
    {
      category: 'Renovation',
      title: "Here's how you could save on your reno",
      description: 'Save thousands on the things you need to renovate or maintain your dream home. Our expert tips and insider knowledge help you get the best value.',
      link: 'Find out how',
      featured: true,
      readTime: '5 min read',
      image: '🏠'
    },
    {
      category: 'Bathroom Renovation',
      title: 'How Much Does An Average Bathroom Renovation Cost? [2025]',
      description: 'You can spend anywhere from $8,000 to $35,000 or more on a bathroom renovation, depending on the size of your bathroom, and how much your materials costs are.',
      link: 'Read Article',
      readTime: '8 min read',
      image: '🛁'
    },
    {
      category: 'Windows',
      title: '10 bay window ideas for your home',
      description: 'Looking for some inspiration and bay window ideas? Discover how to decorate your bay window with hipages today.',
      link: 'Read Article',
      readTime: '6 min read',
      image: '🪟'
    },
    {
      category: 'Pool Fencing',
      title: 'How Much Does Glass Pool Fencing Cost? [2025]',
      description: 'Glass pool fencing allows you to have a view of your pool, but how much does it cost? Glass pool fencing can be expensive, but there are ways to minimise the cost.',
      link: 'Read Article',
      readTime: '7 min read',
      image: '🏊‍♂️'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Expert Guides & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get insider knowledge from industry experts. Learn how to save money, 
            avoid common mistakes, and make informed decisions for your home projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16">
          {/* Featured Article */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{articles[0].image}</div>
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-orange-700 bg-orange-200">
                    <BookOpenIcon className="h-4 w-4 mr-1" />
                    {articles[0].category}
                  </span>
                  <div className="text-sm text-orange-600 mt-1">{articles[0].readTime}</div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {articles[0].title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {articles[0].description}
              </p>
              <a href="#" className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {articles[0].link}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Article List */}
          <div className="space-y-6">
            {articles.slice(1).map((article, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{article.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-gray-600 bg-gray-100">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 ml-3">{article.readTime}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <a href="#" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm">
                      {article.link}
                      <ArrowRightIcon className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Calculator CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 shadow-2xl text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <CalculatorIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Free Cost Calculators</h3>
            <p className="text-xl text-blue-100 mb-8">
              Get accurate estimates for your home projects with our comprehensive cost calculators. 
              Plan your budget before you start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Try Calculator
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Browse All Guides
              </button>
            </div>
          </div>
        </div>

        {/* View all articles */}
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 text-lg transition-colors">
            View all articles
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}