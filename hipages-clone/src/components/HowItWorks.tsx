import { ChatBubbleLeftRightIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Tell us what you need',
      description: 'Answer a few quick questions and even upload a photo.',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      number: '2',
      title: 'Get multiple quotes from professional tradies',
      description: 'Our free service instantly alerts local tradies for quotes to get your job done.',
      icon: UserGroupIcon,
    },
    {
      number: '3',
      title: 'Choose the best tradie for the job',
      description: 'Compare profiles and verified recommendations to get started.',
      icon: CheckCircleIcon,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How hipages works
          </h2>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <step.icon className="h-8 w-8 text-orange-500" aria-hidden="true" />
                </div>
                <div className="mt-4">
                  <div className="text-lg font-semibold text-orange-500 mb-2">
                    {step.number}. {step.title}
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Customer Support</h3>
                <p className="text-gray-600">Our team is on hand if you need help</p>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                  Contact us
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-100">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Registered And Licenced</h3>
                <p className="text-gray-600">ABNs and licences checked</p>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* App download section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Download our mobile app</h3>
          <p className="text-gray-600 mb-6">Find out more</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="inline-block">
              <img 
                src="/api/placeholder/135/40" 
                alt="Get it on Google Play" 
                className="h-10"
              />
            </a>
            <a href="#" className="inline-block">
              <img 
                src="/api/placeholder/135/40" 
                alt="Download on the App Store" 
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}