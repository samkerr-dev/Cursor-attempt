import { ChatBubbleLeftRightIcon, UserGroupIcon, CheckCircleIcon, PhoneIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Tell us what you need',
      description: 'Answer a few quick questions and even upload a photo. Our smart matching system finds the perfect tradies for your specific job.',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      number: '2',
      title: 'Get multiple quotes from professional tradies',
      description: 'Our free service instantly alerts local tradies. Receive up to 3 competitive quotes from verified professionals in your area.',
      icon: UserGroupIcon,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      number: '3',
      title: 'Choose the best tradie for the job',
      description: 'Compare profiles, verified recommendations, and pricing. Book with confidence knowing all tradies are licensed and insured.',
      icon: CheckCircleIcon,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            How hipages works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting quality tradespeople for your home has never been easier. 
            Our proven 3-step process connects you with the right professionals every time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-3 mb-20">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 transform translate-x-4 z-0"></div>
              )}
              
              <div className={`relative bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50`}>
                {/* Step number */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${step.color} rounded-2xl shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
                  <PhoneIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7 Customer Support</h3>
                <p className="text-gray-600 mb-4">Our dedicated team is always here to help you through every step of your project.</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Contact us
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-green-600 shadow-lg">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Verified & Licensed</h3>
                <p className="text-gray-600 mb-4">All tradies undergo thorough background checks, license verification, and insurance validation.</p>
                <a href="#" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Learn more
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* App download section */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">Get the hipages app</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Manage your projects on the go. Post jobs, communicate with tradies, and track progress all from your phone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#" className="group">
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">▶</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">GET IT ON</div>
                    <div className="text-lg font-bold text-gray-900">Google Play</div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="group">
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🍎</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">DOWNLOAD ON THE</div>
                    <div className="text-lg font-bold text-gray-900">App Store</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}