import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ExternalLink, Heart } from 'lucide-react'

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Faith Conference 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Sanctuary",
      description: "Join us for three days of worship, teaching, and fellowship with renowned speakers from around the world.",
      category: "conference",
      image: "🎤",
      attendees: 500,
      featured: true
    },
    {
      id: 2,
      title: "Youth Summer Camp",
      date: "July 10-15, 2024",
      time: "All Day",
      location: "Camp Galilee",
      description: "A week-long adventure for teenagers featuring outdoor activities, worship, and biblical teaching.",
      category: "youth",
      image: "🏕️",
      attendees: 120,
      featured: false
    },
    {
      id: 3,
      title: "Community Outreach Day",
      date: "April 20, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "Various Locations",
      description: "Join our community service projects around Jerusalem, serving those in need with practical help and love.",
      category: "outreach",
      image: "🤝",
      attendees: 200,
      featured: false
    },
    {
      id: 4,
      title: "Easter Celebration",
      date: "March 31, 2024",
      time: "6:00 AM, 9:00 AM, 11:00 AM",
      location: "Main Sanctuary",
      description: "Celebrate the resurrection of Jesus with special worship services throughout the day.",
      category: "worship",
      image: "✝️",
      attendees: 800,
      featured: true
    },
    {
      id: 5,
      title: "Marriage Enrichment Weekend",
      date: "May 3-5, 2024",
      time: "Friday 7:00 PM - Sunday 4:00 PM",
      location: "Retreat Center",
      description: "A weekend retreat for couples to strengthen their relationships through biblical principles and practical tools.",
      category: "family",
      image: "💕",
      attendees: 80,
      featured: false
    },
    {
      id: 6,
      title: "Theology School Graduation",
      date: "June 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Main Sanctuary",
      description: "Celebrate with our theology school graduates as they complete their studies and prepare for ministry.",
      category: "education",
      image: "🎓",
      attendees: 300,
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Events', icon: '📅' },
    { id: 'worship', name: 'Worship', icon: '🙏' },
    { id: 'conference', name: 'Conferences', icon: '🎤' },
    { id: 'youth', name: 'Youth', icon: '🎸' },
    { id: 'family', name: 'Family', icon: '👨‍👩‍👧‍👦' },
    { id: 'outreach', name: 'Outreach', icon: '🤝' },
    { id: 'education', name: 'Education', icon: '📚' }
  ]

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory)

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
              Upcoming <span className="text-accent-gold">Events</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              Join us for meaningful gatherings, special services, and community activities 
              that build faith and strengthen relationships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Categories Filter */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-8">
              Event <span className="text-accent-gold">Categories</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Events */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            {filteredEvents.filter(event => event.featured).map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="glass-card p-8 mb-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-6xl">{event.image}</div>
                      <div className="flex-1">
                        <div className="bg-accent-gold text-primary-blue text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                          FEATURED EVENT
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-primary-blue mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-accent-gold" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-accent-gold" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-accent-gold" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <div className="mb-4">
                      <div className="flex items-center justify-center lg:justify-end space-x-2 text-gray-600 mb-2">
                        <Users className="w-5 h-5" />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>
                    <button className="btn-primary w-full lg:w-auto">
                      RSVP Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Regular Events Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.filter(event => !event.featured).map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{event.image}</div>
                    <h3 className="text-xl font-bold text-primary-blue mb-2">{event.title}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-accent-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-accent-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-accent-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}</span>
                    </div>
                    <button className="btn-primary text-sm px-4 py-2">
                      RSVP
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Calendar Integration */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Never Miss an <span className="text-accent-gold">Event</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Stay up-to-date with all our events by subscribing to our calendar or following us on social media.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Calendar,
                title: "Subscribe to Calendar",
                description: "Add our events calendar to your Google Calendar, Outlook, or Apple Calendar",
                action: "Subscribe Now"
              },
              {
                icon: Heart,
                title: "Email Notifications",
                description: "Get weekly email updates about upcoming events and special announcements",
                action: "Sign Up"
              },
              {
                icon: ExternalLink,
                title: "Social Media",
                description: "Follow us on Facebook and Instagram for real-time updates and event photos",
                action: "Follow Us"
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <button className="btn-primary w-full">
                  {option.action}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Have an Event <span className="text-accent-gold">Idea</span>?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for ways to serve our community better. If you have 
              an idea for an event or would like to volunteer, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">Propose an Event</button>
              <button className="btn-primary">Volunteer Opportunities</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Events