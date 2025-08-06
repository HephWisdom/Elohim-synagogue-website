import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Thank you for your message! We will get back to you soon.')
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Faith Avenue", "Jerusalem, Israel 12345"],
      color: "text-accent-gold"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+972-2-123-4567", "Emergency: +972-2-123-4568"],
      color: "text-primary-blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@elohimsynagogue.org", "pastoral@elohimsynagogue.org"],
      color: "text-accent-red"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat-Sun: By appointment"],
      color: "text-primary-blue-light"
    }
  ]

  const serviceHours = [
    { day: "Sunday", services: ["Morning Worship: 9:00 AM & 11:00 AM", "Youth Service: 5:00 PM"] },
    { day: "Wednesday", services: ["Midweek Prayer: 7:00 PM"] },
    { day: "Friday", services: ["Evening Vigil: 6:00 PM"] },
    { day: "Saturday", services: ["Bible Study: 10:00 AM"] }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-blue to-primary-blue-light text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-accent-gold">Us</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              We'd love to hear from you. Reach out with any questions, prayer requests, 
              or to learn more about our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8">
                <h2 className="text-3xl font-bold text-primary-blue mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="pastoral">Pastoral Care</option>
                      <option value="theology-school">Theology School</option>
                      <option value="events">Events & Programs</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                      placeholder="Please share your message, questions, or prayer requests..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Service Hours */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Map Placeholder */}
              <div className="glass-card p-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary-blue mx-auto mb-4" />
                    <p className="text-primary-blue font-medium">
                      Interactive Google Map<br />
                      <span className="text-sm text-gray-600">123 Faith Avenue, Jerusalem</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Hours */}
              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold text-primary-blue mb-6">Service Schedule</h3>
                <div className="space-y-4">
                  {serviceHours.map((schedule, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <h4 className="font-semibold text-primary-blue mb-2">{schedule.day}</h4>
                      <div className="space-y-1">
                        {schedule.services.map((service, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{service}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Stay <span className="text-accent-gold">Connected</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow us on social media for updates, inspirational content, and community highlights.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Facebook, name: "Facebook", handle: "@ElohimSynagogue", color: "hover:text-blue-600" },
              { icon: Instagram, name: "Instagram", handle: "@elohimsynagogue", color: "hover:text-pink-600" },
              { icon: Youtube, name: "YouTube", handle: "Elohim Synagogue", color: "hover:text-red-600" },
              { icon: Twitter, name: "Twitter", handle: "@elohimsynagogue", color: "hover:text-blue-400" }
            ].map((social, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary-blue rounded-full mb-4 ${social.color} transition-colors`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-blue mb-2">{social.name}</h3>
                <p className="text-gray-600">{social.handle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pastoral <span className="text-accent-gold">Care</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              In times of crisis, celebration, or spiritual need, our pastoral team is available 
              to provide care, prayer, and support to our community members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-accent-gold" />
                <span>Emergency: +972-2-123-4568</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-accent-gold" />
                <span>pastoral@elohimsynagogue.org</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact