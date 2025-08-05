import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Message sent! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or prayer requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary-blue mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="visit">Planning a Visit</option>
                  <option value="ministry">Ministry Opportunities</option>
                  <option value="school">Theology School</option>
                  <option value="events">Events & Programs</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please share your message, question, or prayer request..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Church Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-blue mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-blue">Address</h3>
                    <p className="text-gray-600">
                      123 Faith Street<br />
                      Holy City, HC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-blue">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available Monday - Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-blue">Email</h3>
                    <p className="text-gray-600">info@elohimsynagogue.org</p>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-accent-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-blue">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: After service until 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-primary-blue rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold text-accent-gold mb-6">Follow Us</h2>
              <p className="text-blue-100 mb-6">
                Stay connected with our community through social media for updates, events, and inspiration.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex items-center space-x-3 p-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span>Twitter</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                  <Youtube className="h-6 w-6" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-accent-red rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Emergency Pastoral Care</h3>
              <p className="text-red-100 mb-3">
                For urgent pastoral care or emergency situations, please call:
              </p>
              <p className="text-xl font-bold">(555) 123-4567 ext. 911</p>
              <p className="text-sm text-red-100">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-white rounded-lg p-8">
          <h2 className="subsection-title text-center mb-8">Find Us</h2>
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
    </div>
  )
}

export default Contact