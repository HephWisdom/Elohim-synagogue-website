import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Target, Star, Users, Calendar, Award } from 'lucide-react'

const About = () => {
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

  const timelineEvents = [
    {
      year: "1990",
      title: "Foundation",
      description: "Elohim Synagogue was established with a vision to serve the community through faith and education."
    },
    {
      year: "1995",
      title: "First Expansion",
      description: "Extended our facilities to accommodate growing congregation and introduced youth programs."
    },
    {
      year: "2000",
      title: "School of Theology",
      description: "Launched our theological education programs to train future religious leaders."
    },
    {
      year: "2010",
      title: "Community Outreach",
      description: "Established comprehensive community service programs and charity initiatives."
    },
    {
      year: "2020",
      title: "Digital Ministry",
      description: "Embraced technology to reach broader audiences through online services and education."
    },
    {
      year: "2024",
      title: "Today",
      description: "Continuing to grow and serve our community with over 1,000 active members."
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
              About <span className="text-accent-gold">Elohim Synagogue</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              A community united in faith, dedicated to spiritual growth, 
              and committed to serving others with love and compassion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To create a welcoming community where people can encounter God, 
                grow in their faith, and discover their divine purpose through 
                worship, fellowship, and service to others.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-blue" />
              </div>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a beacon of hope and transformation in our community, 
                raising up leaders who will impact the world with the love of God 
                and the truth of His Word.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-accent-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">Our Values</h2>
              <div className="text-gray-600 space-y-2">
                <p>• Faith in God's Word</p>
                <p>• Love for one another</p>
                <p>• Community and fellowship</p>
                <p>• Service to others</p>
                <p>• Excellence in all we do</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founding Story */}
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
                Our <span className="text-accent-gold">Founding Story</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  In 1990, a small group of believers felt called to establish a place 
                  of worship that would serve not just as a religious gathering place, 
                  but as a center for community transformation and spiritual education.
                </p>
                <p>
                  Founded by Rabbi David Goldstein and a dedicated team of faithful 
                  individuals, Elohim Synagogue began with just 25 members meeting 
                  in a modest rented hall. Our founders envisioned a community where 
                  ancient traditions would meet contemporary needs.
                </p>
                <p>
                  Today, over three decades later, we have grown to serve more than 
                  1,000 members while maintaining our core commitment to authentic 
                  faith, quality education, and compassionate service.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center">
                <Users className="w-8 h-8 text-primary-blue mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-blue mb-2">1000+</div>
                <p className="text-gray-600">Active Members</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Calendar className="w-8 h-8 text-accent-gold mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-blue mb-2">34</div>
                <p className="text-gray-600">Years of Service</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Award className="w-8 h-8 text-accent-red mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-blue mb-2">500+</div>
                <p className="text-gray-600">Theology Graduates</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Heart className="w-8 h-8 text-primary-blue mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-blue mb-2">50+</div>
                <p className="text-gray-600">Community Programs</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Our <span className="text-accent-gold">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the milestones that have shaped our community over the decades
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-blue/20"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-card p-6">
                      <div className="text-2xl font-bold text-accent-gold mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold text-primary-blue mb-3">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="w-4 h-4 bg-primary-blue rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="section-padding bg-gradient-to-r from-primary-blue to-primary-blue-light text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-8">
              "Our greatest joy is seeing lives transformed by the power of God's love. 
              Every person who walks through our doors becomes part of our family."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center">
                <span className="text-primary-blue font-bold text-xl">RG</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-accent-gold">Rabbi David Goldstein</p>
                <p className="text-white/80">Senior Pastor & Founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About