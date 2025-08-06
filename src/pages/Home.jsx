import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Quote, Calendar, Users, Book, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'

const Home = () => {
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

  return (
    <div>
      <Hero />
      
      {/* Daily Scripture Quote Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <Quote className="w-12 h-12 text-accent-gold mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary-blue mb-4">Today's Scripture</h2>
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Trust in the Lord with all your heart and lean not on your own understanding; 
              in all your ways submit to him, and he will make your paths straight."
            </blockquote>
            <cite className="text-primary-blue font-medium">- Proverbs 3:5-6</cite>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-6">
                About <span className="text-accent-gold">Elohim Synagogue</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                For over three decades, Elohim Synagogue has been a beacon of faith, 
                hope, and community in Jerusalem. We are committed to nurturing spiritual 
                growth, providing quality theological education, and serving our community 
                with love and dedication.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to create a welcoming environment where people can 
                encounter God, grow in their faith, and discover their purpose in life. 
                We believe in the power of community, the importance of biblical teaching, 
                and the call to serve others.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-blue">Our Mission</h3>
                    <p className="text-gray-600">Building a strong faith community</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                    <Book className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-blue">Our Vision</h3>
                    <p className="text-gray-600">Transforming lives through Biblical truth</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-blue">Our Values</h3>
                    <p className="text-gray-600">Faith, Love, Community, Service</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Join Us in <span className="text-accent-gold">Worship</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience meaningful worship, biblical teaching, and fellowship 
              in our weekly services and special events.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Sunday Worship",
                time: "9:00 AM & 11:00 AM",
                description: "Join us for inspiring worship, biblical teaching, and fellowship every Sunday morning.",
                icon: "🙏"
              },
              {
                title: "Midweek Prayer",
                time: "Wednesday 7:00 PM",
                description: "Come together for prayer, Bible study, and spiritual encouragement mid-week.",
                icon: "📖"
              },
              {
                title: "Friday Vigil",
                time: "Friday 6:00 PM",
                description: "End your week with worship, reflection, and preparation for the Sabbath.",
                icon: "🕯️"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">{service.title}</h3>
                <p className="text-accent-gold font-medium mb-3">{service.time}</p>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* School of Theology Preview */}
      <section className="section-padding bg-gradient-to-r from-primary-blue to-primary-blue-light text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                School of <span className="text-accent-gold">Theology</span>
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Deepen your understanding of Scripture and develop your calling 
                through our comprehensive theological education programs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <span>Certificate Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <span>Diploma in Theological Studies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <span>Advanced Biblical Studies</span>
                </div>
              </div>
              <Link to="/school" className="btn-secondary inline-flex items-center space-x-2">
                <span>Explore Our Programs</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">500+</div>
                <p className="text-white/80">Graduates</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">15+</div>
                <p className="text-white/80">Years of Excellence</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">25+</div>
                <p className="text-white/80">Expert Faculty</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">12+</div>
                <p className="text-white/80">Course Options</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home