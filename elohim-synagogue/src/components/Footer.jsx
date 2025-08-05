import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
                <span className="text-primary-blue font-bold text-lg">E</span>
              </div>
              <h3 className="text-xl font-bold text-accent-gold">Elohim Synagogue</h3>
            </div>
            <p className="text-blue-200 mb-4">
              A house of worship where faith meets community, and hearts are transformed by God's love.
            </p>
            <div className="text-accent-gold italic">
              "For where two or three gather in my name, there am I with them." - Matthew 18:20
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-accent-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-accent-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-accent-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/school" className="text-blue-200 hover:text-accent-gold transition-colors">
                  Theology School
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-200 hover:text-accent-gold transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-blue-200 hover:text-accent-gold transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-200 hover:text-accent-gold transition-colors">
                  Blog & Reflections
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-accent-gold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-gold" />
                <span className="text-blue-200">
                  123 Faith Street<br />
                  Holy City, HC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-gold" />
                <span className="text-blue-200">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-gold" />
                <span className="text-blue-200">info@elohimsynagogue.org</span>
              </div>
            </div>
          </div>

          {/* Service Times & Social */}
          <div>
            <h3 className="text-lg font-semibold text-accent-gold mb-4">Service Times</h3>
            <div className="space-y-2 mb-6">
              <div className="text-blue-200">
                <strong>Sunday Service:</strong> 10:00 AM
              </div>
              <div className="text-blue-200">
                <strong>Midweek Prayer:</strong> Wednesday 7:00 PM
              </div>
              <div className="text-blue-200">
                <strong>Friday Prayer:</strong> 6:00 PM
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-accent-gold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-accent-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-accent-gold transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-accent-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-accent-gold transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Elohim Synagogue. All rights reserved. | 
            <span className="text-accent-gold ml-1">Built with faith and love</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer