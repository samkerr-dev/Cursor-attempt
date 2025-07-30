export default function Testimonials() {
  const testimonials = [
    {
      service: 'House Cleaning',
      review: 'quick and super clean',
      customer: 'DIANNE',
      location: 'Worrigee, NSW',
      date: '7th, Jul: 1:56PM',
      initial: 'D'
    },
    {
      service: 'Pool Fencing',
      review: 'Jason was very professional, he installed our pool fence better than we expected. He kept contact ...',
      customer: 'Jeff',
      location: 'Endeavour Hills, VIC',
      date: '29th, May: 1:54PM',
      initial: 'J'
    },
    {
      service: 'Interior Painters',
      review: 'Jarron and Nathan were fantastic, friendly, polite and did an amazing job, the work they did was to...',
      customer: 'Leonie',
      location: 'Raworth, NSW',
      date: '2nd, Jul: 1:45PM',
      initial: 'L'
    },
    {
      service: 'Concrete Removal',
      review: 'Paul and team were; quick to respond, polite and helpful, very reasonably priced and accomodating t...',
      customer: 'Chris',
      location: 'Hillside, VIC',
      date: '10th, Jun: 1:24PM',
      initial: 'C'
    },
    {
      service: 'Supply & Install Ceiling Insulation',
      review: 'We had a fantastic experience with Kris and his team from Pro Insulation. They removed old, deterio...',
      customer: 'Jodi',
      location: 'Seymour, VIC',
      date: '10th, Jun: 1:19PM',
      initial: 'J'
    },
    {
      service: 'Renovation Carpenter',
      review: 'I couldn\'t be happier with the recent carpentry work completed by Gynnie. From start to finish, he ...',
      customer: 'Clare',
      location: 'Surrey Hills, VIC',
      date: '7th, Jul: 1:14PM',
      initial: 'C'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tradie Recommendations
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {testimonial.service}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {testimonial.review}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">
                      {testimonial.initial}
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.customer}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              
              <div className="mt-3 text-xs text-gray-400">
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors">
            Get Quotes
          </button>
        </div>
      </div>
    </section>
  )
}