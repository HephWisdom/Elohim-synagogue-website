import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-gold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block hover:text-accent-gold transition-colors">About Us</Link>
              <Link to="/services" className="block hover:text-accent-gold transition-colors">Our Services</Link>
              <Link to="/school" className="block hover:text-accent-gold transition-colors">School of Theology</Link>
              <Link to="/events" className="block hover:text-accent-gold transition-colors">Upcoming Events</Link>
              <Link to="/sermons" className="block hover:text-accent-gold transition-colors">Sermons</Link>
              <Link to="/gallery" className="block hover:text-accent-gold transition-colors">Gallery</Link>
              <Link to="/contact" className="block hover:text-accent-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-gold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-accent-gold flex-shrink-0" />
                <div>
                  <p>123 Faith Avenue</p>
                  <p>Jerusalem, Israel 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-gold" />
                <p>+972-2-123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-gold" />
                <p>info@elohimsynagogue.org</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-gold">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-accent-gold transition-colors transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-accent-gold transition-colors transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-accent-gold transition-colors transform hover:scale-110">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-accent-gold transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-medium mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/70 focus:outline-none focus:border-accent-gold"
                />
                <button className="px-4 py-2 bg-accent-gold text-primary-blue font-medium rounded-r-lg hover:bg-yellow-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-center md:text-left">
                &copy; 2024 Elohim Synagogue. All rights reserved.
              </p>
            </div>
            
            {/* Scripture Quote */}
            <div className="text-center md:text-right">
              <p className="text-accent-gold italic">
                "For where two or three are gathered in my name, there am I among them."
              </p>
              <p className="text-sm text-white/70 mt-1">- Matthew 18:20</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer