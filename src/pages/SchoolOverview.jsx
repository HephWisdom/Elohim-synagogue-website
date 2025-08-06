import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Book, Users, Award, Target, Heart, Star, ArrowRight, GraduationCap } from 'lucide-react'

const SchoolOverview = () => {
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

  const coreValues = [
    {
      icon: Book,
      title: "Biblical Authority",
      description: "We believe in the infallible Word of God as our foundation for all theological study and practice."
    },
    {
      icon: Heart,
      title: "Spiritual Formation",
      description: "We emphasize the development of character and spiritual maturity alongside academic excellence."
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "We foster collaborative learning environments that encourage discussion and mutual growth."
    },
    {
      icon: Target,
      title: "Practical Application",
      description: "We connect theological knowledge with real-world ministry and practical life application."
    }
  ]

  const highlights = [
    {
      number: "500+",
      label: "Graduates",
      description: "Serving in ministry worldwide"
    },
    {
      number: "15+",
      label: "Years",
      description: "Of academic excellence"
    },
    {
      number: "25+",
      label: "Faculty",
      description: "Expert theologians & practitioners"
    },
    {
      number: "12+",
      label: "Programs",
      description: "Certificate to advanced degrees"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-blue to-primary-blue-light text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              School of <span className="text-accent-gold">Theology</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Equipping leaders for ministry through excellence in theological education, 
              spiritual formation, and practical training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/school/programs" className="btn-secondary inline-flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>View Programs</span>
              </Link>
              <Link to="/school/apply" className="btn-primary inline-flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
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
                Our <span className="text-accent-gold">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The Elohim Synagogue School of Theology exists to prepare men and women 
                for effective ministry through rigorous academic study, spiritual formation, 
                and practical training in a supportive community environment.
              </p>
              <p className="text-gray-600 mb-8">
                We are committed to developing leaders who will faithfully serve God and 
                His people with integrity, wisdom, and compassion, equipped with both 
                theological knowledge and practical ministry skills.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-accent-gold" />
                  <span className="text-gray-700">Accredited by the International Association of Theological Schools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-accent-gold" />
                  <span className="text-gray-700">95% employment rate within 6 months of graduation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-accent-gold" />
                  <span className="text-gray-700">Small class sizes with personalized attention</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">{highlight.number}</div>
                  <div className="text-lg font-semibold text-primary-blue mb-1">{highlight.label}</div>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Our Core <span className="text-accent-gold">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundation of our educational philosophy is built on these essential principles 
              that guide everything we do.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-primary-blue mb-6">Academic Excellence</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-blue font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-blue mb-2">Rigorous Curriculum</h4>
                      <p className="text-gray-600">Comprehensive study of Scripture, theology, church history, and practical ministry.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-blue font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-blue mb-2">Expert Faculty</h4>
                      <p className="text-gray-600">Learn from scholars and practitioners with advanced degrees and real ministry experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-blue font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-blue mb-2">Practical Training</h4>
                      <p className="text-gray-600">Hands-on ministry experience through internships and supervised field work.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-6">
                Excellence in <span className="text-accent-gold">Education</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our School of Theology combines traditional theological education with 
                innovative teaching methods to prepare students for the challenges of 
                21st-century ministry.
              </p>
              <p className="text-gray-600 mb-8">
                We offer flexible learning options including full-time, part-time, 
                and distance learning programs to accommodate students from diverse 
                backgrounds and life circumstances.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-blue">8:1</div>
                  <p className="text-sm text-gray-600">Student to Faculty Ratio</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-blue">100%</div>
                  <p className="text-sm text-gray-600">Graduate Satisfaction Rate</p>
                </div>
              </div>

              <Link to="/school/programs" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore Our Programs</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
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
              Ready to Begin Your <span className="text-accent-gold">Journey</span>?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the next step in your calling. Join our community of learners and 
              prepare for a lifetime of faithful ministry and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/school/apply" className="btn-secondary">Start Your Application</Link>
              <Link to="/contact" className="btn-primary">Schedule a Visit</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SchoolOverview