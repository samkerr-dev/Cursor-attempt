import { BriefcaseIcon, PhoneIcon, CurrencyDollarIcon, StarIcon } from '@heroicons/react/24/outline'

export default function TradieSection() {
  const features = [
    {
      title: 'Job leads straight to your phone',
      description: 'When clients post a job, you get that lead straight to your phone. No need to spend hours chasing new work.',
      icon: PhoneIcon,
    },
    {
      title: "You choose the jobs. You're in control",
      description: 'Fancy a particular job? Accept it! Get in touch with the potential client and arrange a time to quote.',
      icon: BriefcaseIcon,
    },
    {
      title: 'Manage jobs from your phone',
      description: 'Quote, schedule, invoice and accept payments with job management features in the one app.',
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Get recommended by your clients',
      description: 'Potential clients will look at your profile, so hipages collates recommendations from past jobs to help you secure your next gig.',
      icon: StarIcon,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Connect with more clients
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Over 100,000 jobs posted every month on average on hipages.
          </p>
          <p className="text-gray-600">
            Register your interest and our team will call to discuss how we can help grow and manage your business.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors text-lg">
            Get started
          </button>
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Hear Martin's success on hipages</h3>
          <p className="text-gray-600 font-semibold">Martin Nguyen</p>
          <p className="text-gray-500">Kubra Building Services</p>
        </div>

        {/* How it works for tradies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">How it works</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn more */}
        <div className="mt-12 text-center">
          <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
            Learn more about how hipages works
          </a>
        </div>

        {/* Testimonials from tradies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Hear from our tradies</h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 mb-4">
                "We started our business with nothing. No savings or building contracts so you can imagine it was very stressful diving into the unknown. We used hipages to get us off the ground."
              </p>
              <p className="font-semibold text-gray-900">Hayden, Wattley Air and Electrical</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 mb-4">
                "My company has been building custom-built homes, extensions and renovations for the past 20 years. We have been working with the team at hipages over the last 5 years and most of the jobs I get there pay between $250K - $1M"
              </p>
              <p className="font-semibold text-gray-900">Jonathan, Tailored Construction Group</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 mb-4">
                "When I first started, I had trouble finding customers, chasing work and with no advertising, it was really hard. I needed extra work. hipages called me and asked if I wanted to join, I thought that's not a bad idea. Then my business boomed so much more it's not even funny."
              </p>
              <p className="font-semibold text-gray-900">Michael, Quick & Quality Renovations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}