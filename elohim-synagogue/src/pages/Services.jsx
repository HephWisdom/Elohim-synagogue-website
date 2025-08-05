import { Clock, MapPin, Users, Heart } from 'lucide-react'

const Services = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="section-title">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for worship, prayer, and fellowship. All are welcome in God's house.
          </p>
        </div>

        {/* Service Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent-gold">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-accent-gold mr-4" />
              <h3 className="text-2xl font-bold text-primary-blue">Sunday Service</h3>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-primary-blue">10:00 AM - 12:00 PM</p>
              <p className="text-gray-600">Main worship service featuring inspiring messages, contemporary worship, and communion.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Opening worship and praise</li>
                <li>• Biblical teaching and preaching</li>
                <li>• Prayer and ministry time</li>
                <li>• Fellowship after service</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary-blue">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-primary-blue mr-4" />
              <h3 className="text-2xl font-bold text-primary-blue">Midweek Prayer</h3>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-primary-blue">Wednesday 7:00 PM - 8:30 PM</p>
              <p className="text-gray-600">Join us for prayer, Bible study, and spiritual encouragement in the middle of the week.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Interactive Bible study</li>
                <li>• Group prayer and intercession</li>
                <li>• Personal testimony sharing</li>
                <li>• Light refreshments served</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent-red">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-accent-red mr-4" />
              <h3 className="text-2xl font-bold text-primary-blue">Friday Prayer</h3>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-primary-blue">Friday 6:00 PM - 7:00 PM</p>
              <p className="text-gray-600">End your week with reflection, prayer, and preparation for the weekend.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Evening prayer and worship</li>
                <li>• Reflection on the week</li>
                <li>• Preparation for Sunday</li>
                <li>• Community fellowship</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 mb-16">
          <h2 className="subsection-title text-center mb-8">Visit Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="h-8 w-8 text-accent-gold mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-2">
                    123 Faith Street<br />
                    Holy City, HC 12345<br />
                    United States
                  </p>
                  <p className="text-sm text-gray-500">
                    Free parking available in our lot and on surrounding streets
                  </p>
                </div>
              </div>

              <div className="bg-primary-blue rounded-lg p-6 text-white">
                <h4 className="text-lg font-semibold text-accent-gold mb-4">First Time Visitors</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Arrive 15 minutes early for greeting</li>
                  <li>• Dress code: Come as you are!</li>
                  <li>• Children's ministry available</li>
                  <li>• Accessible facilities</li>
                  <li>• Refreshments after service</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">Google Maps integration would go here</p>
                <p className="text-xs mt-2">
                  123 Faith Street, Holy City, HC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="subsection-title text-center mb-12">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-accent-gold text-2xl mb-4">"</div>
              <p className="text-gray-600 mb-4 italic">
                "Elohim Synagogue has been a blessing to our family. The warm community and 
                powerful teaching have helped us grow in our faith journey."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-gold font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-blue">Maria Johnson</p>
                  <p className="text-sm text-gray-500">Member since 2018</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-accent-gold text-2xl mb-4">"</div>
              <p className="text-gray-600 mb-4 italic">
                "The theology school here has equipped me for ministry in ways I never imagined. 
                The professors are knowledgeable and caring."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-blue font-bold">DW</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-blue">David Wilson</p>
                  <p className="text-sm text-gray-500">Theology Graduate 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-accent-gold text-2xl mb-4">"</div>
              <p className="text-gray-600 mb-4 italic">
                "From the moment we walked in, we felt at home. This church truly lives out 
                the love of Christ in everything they do."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">LB</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-blue">Linda Brown</p>
                  <p className="text-sm text-gray-500">New Member 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary-blue rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold text-accent-gold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-blue-100 mb-6">
            We'd love to welcome you to our church family this Sunday!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">Plan Your Visit</button>
            <button className="btn-primary bg-white text-primary-blue hover:bg-gray-100">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services