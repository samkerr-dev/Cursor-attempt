import { StarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {
  const testimonials = [
    {
      service: 'House Cleaning',
      review: 'Absolutely fantastic service! The team was punctual, thorough, and left my house spotless. Quick and super clean - exactly what I needed.',
      customer: 'Dianne',
      location: 'Worrigee, NSW',
      date: '7th Jul, 1:56PM',
      initial: 'D',
      rating: 5,
      color: 'from-purple-500 to-purple-600'
    },
    {
      service: 'Pool Fencing',
      review: 'Jason was very professional and installed our pool fence better than we expected. He kept in constant contact throughout the project and delivered exceptional quality work.',
      customer: 'Jeff',
      location: 'Endeavour Hills, VIC',
      date: '29th May, 1:54PM',
      initial: 'J',
      rating: 5,
      color: 'from-blue-500 to-blue-600'
    },
    {
      service: 'Interior Painters',
      review: 'Jarron and Nathan were fantastic, friendly, polite and did an amazing job. The work they completed exceeded our expectations in every way.',
      customer: 'Leonie',
      location: 'Raworth, NSW',
      date: '2nd Jul, 1:45PM',
      initial: 'L',
      rating: 5,
      color: 'from-green-500 to-green-600'
    },
    {
      service: 'Concrete Removal',
      review: 'Paul and his team were quick to respond, polite and helpful, very reasonably priced and accommodating to our tight schedule. Highly recommended!',
      customer: 'Chris',
      location: 'Hillside, VIC',
      date: '10th Jun, 1:24PM',
      initial: 'C',
      rating: 5,
      color: 'from-orange-500 to-orange-600'
    },
    {
      service: 'Supply & Install Ceiling Insulation',
      review: 'We had a fantastic experience with Kris and his team from Pro Insulation. They removed old, deteriorated insulation and installed new material professionally.',
      customer: 'Jodi',
      location: 'Seymour, VIC',
      date: '10th Jun, 1:19PM',
      initial: 'J',
      rating: 5,
      color: 'from-teal-500 to-teal-600'
    },
    {
      service: 'Renovation Carpenter',
      review: 'I couldn\'t be happier with the recent carpentry work completed by Gynnie. From start to finish, he demonstrated exceptional craftsmanship and attention to detail.',
      customer: 'Clare',
      location: 'Surrey Hills, VIC',
      date: '7th Jul, 1:14PM',
      initial: 'C',
      rating: 5,
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Tradie Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from real customers. See why thousands of Australians trust hipages 
            to connect them with quality tradespeople.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {/* Service category */}
              <div className="flex items-center justify-between mb-6">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${testimonial.color} shadow-md`}>
                  {testimonial.service}
                </span>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Review text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </blockquote>
              
              {/* Customer info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center shadow-lg mr-4`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.customer}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Date */}
              <div className="flex items-center text-gray-400 text-sm mt-4 pt-4 border-t border-gray-100">
                <ClockIcon className="h-4 w-4 mr-2" />
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 shadow-2xl text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">500k+</div>
              <div className="text-orange-100">Reviews collected</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-orange-100">Average rating</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Customer satisfaction</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">24hrs</div>
              <div className="text-orange-100">Average response time</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
          <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied customers who found their perfect tradie through hipages.</p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Free Quotes Now
          </button>
        </div>
      </div>
    </section>
  )
}