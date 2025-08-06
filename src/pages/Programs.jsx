import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Users, Award, Book, ArrowRight, GraduationCap, Calendar } from 'lucide-react'

const Programs = () => {
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

  const programs = [
    {
      title: "Certificate in Biblical Studies",
      duration: "6 months",
      credits: "18 credits",
      format: "Evening Classes",
      description: "A foundational program introducing students to biblical interpretation, theology, and ministry basics.",
      highlights: [
        "Introduction to Old & New Testament",
        "Basic Biblical Interpretation",
        "Christian Doctrine Foundations",
        "Ministry Essentials"
      ],
      requirements: "High school diploma or equivalent",
      tuition: "$2,500",
      color: "bg-accent-gold"
    },
    {
      title: "Diploma in Theological Studies",
      duration: "18 months",
      credits: "54 credits",
      format: "Full-time/Part-time",
      description: "A comprehensive program covering systematic theology, biblical studies, and practical ministry skills.",
      highlights: [
        "Systematic Theology",
        "Biblical Exegesis",
        "Church History",
        "Pastoral Ministry",
        "Homiletics (Preaching)",
        "Christian Ethics"
      ],
      requirements: "High school diploma, basic biblical knowledge recommended",
      tuition: "$7,500",
      color: "bg-primary-blue"
    },
    {
      title: "Advanced Biblical Studies",
      duration: "2 years",
      credits: "72 credits",
      format: "Full-time",
      description: "An in-depth program for serious students pursuing advanced theological education and ministry preparation.",
      highlights: [
        "Advanced Biblical Languages (Hebrew/Greek)",
        "Theological Research Methods",
        "Advanced Systematic Theology",
        "Biblical Theology",
        "Ministry Leadership",
        "Thesis Project"
      ],
      requirements: "Bachelor's degree or Diploma in Theological Studies",
      tuition: "$12,000",
      color: "bg-accent-red"
    },
    {
      title: "Ministry Leadership Certificate",
      duration: "9 months",
      credits: "27 credits",
      format: "Weekend Intensive",
      description: "Designed for working professionals and ministry leaders seeking practical leadership skills.",
      highlights: [
        "Leadership Theory & Practice",
        "Organizational Management",
        "Conflict Resolution",
        "Strategic Planning",
        "Team Building",
        "Financial Stewardship"
      ],
      requirements: "2+ years ministry experience",
      tuition: "$4,500",
      color: "bg-primary-blue-light"
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
              Our <span className="text-accent-gold">Programs</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              Choose from our range of theological education programs designed to meet 
              students at every level of their spiritual and academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`${program.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <GraduationCap className="w-8 h-8" />
                    <div className="text-right">
                      <div className="text-sm opacity-90">{program.credits}</div>
                      <div className="text-sm opacity-90">{program.duration}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-white/90">{program.description}</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary-blue" />
                      <span className="text-sm text-gray-600">{program.format}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary-blue" />
                      <span className="text-sm text-gray-600">Small Classes</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary-blue mb-3">Course Highlights:</h4>
                    <div className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div>
                      <span className="font-medium text-primary-blue">Requirements: </span>
                      <span className="text-gray-600 text-sm">{program.requirements}</span>
                    </div>
                    <div>
                      <span className="font-medium text-primary-blue">Tuition: </span>
                      <span className="text-accent-gold font-semibold">{program.tuition}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link 
                      to="/school/apply" 
                      className="w-full btn-primary inline-flex items-center justify-center space-x-2"
                    >
                      <span>Apply for This Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Features */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Program <span className="text-accent-gold">Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our programs include these valuable features and benefits for students.
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
              {
                icon: Book,
                title: "Comprehensive Library",
                description: "Access to over 10,000 theological books and digital resources"
              },
              {
                icon: Users,
                title: "Mentorship Program",
                description: "Paired with experienced ministry leaders for guidance"
              },
              {
                icon: Calendar,
                title: "Practical Training",
                description: "Real-world ministry experience through internships"
              },
              {
                icon: Award,
                title: "Career Support",
                description: "Job placement assistance and ongoing career guidance"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Application <span className="text-accent-gold">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to begin your theological education journey with us.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Complete our online application form with required documents"
              },
              {
                step: "2",
                title: "Interview",
                description: "Participate in a personal interview with our admissions team"
              },
              {
                step: "3",
                title: "Acceptance",
                description: "Receive your acceptance letter and enrollment information"
              },
              {
                step: "4",
                title: "Begin Studies",
                description: "Start your theological education journey with orientation"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
              Ready to <span className="text-accent-gold">Apply</span>?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the next step in your calling. Our admissions team is ready to help 
              you find the right program for your goals and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/school/apply" className="btn-secondary">Start Application</Link>
              <Link to="/contact" className="btn-primary">Schedule Consultation</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Programs