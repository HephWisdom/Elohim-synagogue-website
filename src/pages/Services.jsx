import React from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Users, Heart, Star } from 'lucide-react'

const Services = () => {
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

  const services = [
    {
      title: "Sunday Morning Worship",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for inspiring worship, powerful biblical teaching, and meaningful fellowship every Sunday.",
      features: ["Live worship music", "Biblical sermons", "Children's ministry", "Fellowship time"],
      icon: "🙏",
      color: "bg-primary-blue"
    },
    {
      title: "Midweek Prayer Meeting",
      time: "Wednesday 7:00 PM",
      description: "Come together for prayer, Bible study, and spiritual encouragement in the middle of the week.",
      features: ["Group prayer", "Bible study", "Worship", "Community sharing"],
      icon: "📖",
      color: "bg-accent-gold"
    },
    {
      title: "Friday Evening Vigil",
      time: "Friday 6:00 PM",
      description: "End your week with worship, reflection, and preparation for the Sabbath.",
      features: ["Contemplative worship", "Sabbath preparation", "Quiet reflection", "Blessing prayers"],
      icon: "🕯️",
      color: "bg-accent-red"
    },
    {
      title: "Youth Service",
      time: "Sunday 5:00 PM",
      description: "Dynamic worship and teaching designed specifically for our young people.",
      features: ["Contemporary music", "Interactive teaching", "Youth fellowship", "Life application"],
      icon: "🎸",
      color: "bg-primary-blue-light"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Cohen",
      role: "Member since 2018",
      content: "The worship at Elohim Synagogue has transformed my spiritual life. The community here feels like family.",
      rating: 5
    },
    {
      name: "Michael Reeves",
      role: "Youth Leader",
      content: "I've seen so many young people grow in their faith here. The youth programs are exceptional.",
      rating: 5
    },
    {
      name: "Rebecca Martinez",
      role: "New Member",
      content: "As a newcomer to the city, I was welcomed with open arms. This is truly a place of love and acceptance.",
      rating: 5
    }
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
              Our <span className="text-accent-gold">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              Join us for meaningful worship, biblical teaching, and fellowship 
              in our weekly services and special gatherings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Schedule */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Weekly <span className="text-accent-gold">Schedule</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer multiple services throughout the week to accommodate different schedules and preferences.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-2xl`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary-blue mb-2">{service.title}</h3>
                    <div className="flex items-center text-accent-gold font-medium mb-3">
                      <Clock className="w-5 h-5 mr-2" />
                      {service.time}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Visit <span className="text-accent-gold">Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're located in the heart of Jerusalem, easily accessible and welcoming to all.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-accent-gold" />
                  <h3 className="text-2xl font-bold text-primary-blue">Our Location</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Address:</strong><br />
                    123 Faith Avenue<br />
                    Jerusalem, Israel 12345
                  </p>
                  
                  <p>
                    <strong>Parking:</strong> Free parking available on-site and street parking
                  </p>
                  
                  <p>
                    <strong>Accessibility:</strong> Wheelchair accessible with dedicated seating areas
                  </p>
                  
                  <p>
                    <strong>Public Transport:</strong> Bus lines 18, 20, and 74 stop nearby
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-primary-blue mb-3">Contact Information</h4>
                  <p className="text-gray-600">Phone: +972-2-123-4567</p>
                  <p className="text-gray-600">Email: info@elohimsynagogue.org</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              {/* Placeholder for Google Map */}
              <div className="glass-card p-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary-blue mx-auto mb-4" />
                    <p className="text-primary-blue font-medium">
                      Interactive Google Map<br />
                      <span className="text-sm text-gray-600">123 Faith Avenue, Jerusalem</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              What People <span className="text-accent-gold">Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our community members about their experience with our services.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center"
              >
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-primary-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-blue to-primary-blue-light text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to <span className="text-accent-gold">Join Us</span>?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We would love to welcome you into our community. Come as you are, and experience 
              the love and fellowship that awaits you at Elohim Synagogue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">Plan Your Visit</button>
              <button className="btn-primary">Contact Us</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services