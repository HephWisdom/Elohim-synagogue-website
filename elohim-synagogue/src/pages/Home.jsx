import { Link } from 'react-router-dom'
import { Calendar, Users, BookOpen, Heart } from 'lucide-react'

const Home = () => {
  // This could be replaced with an API call or dynamic content later
  const dailyVerse = {
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-blue mb-6">
              Welcome to
              <span className="block text-accent-gold">Elohim Synagogue</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              A place where faith flourishes, community thrives, and hearts are transformed by God's love
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/services" className="btn-primary">
                Join Us This Sunday
              </Link>
              <Link to="/school" className="btn-secondary">
                Explore Our School of Theology
              </Link>
            </div>

            {/* Daily Scripture */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto shadow-lg border border-accent-gold/20">
              <h3 className="text-lg font-semibold text-primary-blue mb-3">Today's Scripture</h3>
              <blockquote className="text-gray-700 italic text-lg mb-3">
                "{dailyVerse.text}"
              </blockquote>
              <cite className="text-accent-gold font-semibold">- {dailyVerse.reference}</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Elohim Synagogue?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a place of worship - we're a community dedicated to spiritual growth and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-3">Loving Community</h3>
              <p className="text-gray-600">
                Experience the warmth of genuine fellowship and support from our caring church family
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-3">Biblical Teaching</h3>
              <p className="text-gray-600">
                Grow in your faith through sound biblical teaching and practical life application
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-3">Theology School</h3>
              <p className="text-gray-600">
                Deepen your understanding through our comprehensive theology education programs
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-3">Regular Events</h3>
              <p className="text-gray-600">
                Join us for worship services, prayer meetings, and special community events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-left">Join Us for Worship</h2>
              <p className="text-xl text-gray-600 mb-8">
                Come as you are and experience God's presence with us. All are welcome in our house of worship.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-gold">
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Sunday Service</h3>
                  <p className="text-gray-600">Main worship service with inspiring messages and worship</p>
                  <p className="text-accent-gold font-semibold mt-2">10:00 AM</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-blue">
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Midweek Prayer</h3>
                  <p className="text-gray-600">Join us for prayer, fellowship, and spiritual encouragement</p>
                  <p className="text-accent-gold font-semibold mt-2">Wednesday 7:00 PM</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-red">
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Friday Prayer</h3>
                  <p className="text-gray-600">End your week with prayer and reflection</p>
                  <p className="text-accent-gold font-semibold mt-2">6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-blue rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold text-accent-gold mb-6">First Time Visitor?</h3>
              <p className="text-blue-100 mb-6">
                We'd love to welcome you to our church family! Here's what you can expect when you visit us.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                  <span>Warm and friendly atmosphere</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                  <span>No dress code - come as you are</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                  <span>Free parking available</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                  <span>Children's programs available</span>
                </li>
              </ul>

              <Link to="/contact" className="btn-secondary">
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're looking to deepen your faith, serve in ministry, or pursue theological education, 
            we're here to support your spiritual journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-secondary">
              Learn More About Us
            </Link>
            <Link to="/contact" className="btn-primary bg-white text-primary-blue hover:bg-gray-100">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home