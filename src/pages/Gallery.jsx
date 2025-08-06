import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Image as ImageIcon, Calendar, Users, Heart } from 'lucide-react'

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  const filters = [
    { id: 'all', name: 'All Photos', icon: '🖼️' },
    { id: 'worship', name: 'Worship Services', icon: '🙏' },
    { id: 'events', name: 'Special Events', icon: '🎉' },
    { id: 'youth', name: 'Youth Activities', icon: '🎸' },
    { id: 'community', name: 'Community Service', icon: '🤝' },
    { id: 'graduation', name: 'Graduations', icon: '🎓' },
    { id: 'facilities', name: 'Our Facilities', icon: '🏛️' }
  ]

  const galleryImages = [
    {
      id: 1,
      src: '/placeholder-image.jpg',
      title: 'Sunday Morning Worship',
      category: 'worship',
      date: '2024-01-14',
      description: 'Community gathered for Sunday morning worship service',
      height: 'h-64'
    },
    {
      id: 2,
      src: '/placeholder-image.jpg',
      title: 'Youth Camp 2023',
      category: 'youth',
      date: '2023-07-15',
      description: 'Summer youth camp activities and fellowship',
      height: 'h-80'
    },
    {
      id: 3,
      src: '/placeholder-image.jpg',
      title: 'Community Outreach',
      category: 'community',
      date: '2023-12-10',
      description: 'Serving meals to those in need during the holidays',
      height: 'h-72'
    },
    {
      id: 4,
      src: '/placeholder-image.jpg',
      title: 'Easter Celebration',
      category: 'events',
      date: '2023-04-09',
      description: 'Easter sunrise service and celebration',
      height: 'h-64'
    },
    {
      id: 5,
      src: '/placeholder-image.jpg',
      title: 'Theology School Graduation',
      category: 'graduation',
      date: '2023-06-15',
      description: 'Graduation ceremony for theology school students',
      height: 'h-96'
    },
    {
      id: 6,
      src: '/placeholder-image.jpg',
      title: 'Main Sanctuary',
      category: 'facilities',
      date: '2023-01-01',
      description: 'Our beautiful main sanctuary during worship',
      height: 'h-72'
    },
    {
      id: 7,
      src: '/placeholder-image.jpg',
      title: 'Christmas Concert',
      category: 'events',
      date: '2023-12-24',
      description: 'Annual Christmas concert with choir and orchestra',
      height: 'h-80'
    },
    {
      id: 8,
      src: '/placeholder-image.jpg',
      title: 'Youth Worship',
      category: 'youth',
      date: '2023-11-19',
      description: 'Youth leading worship during Sunday evening service',
      height: 'h-64'
    },
    {
      id: 9,
      src: '/placeholder-image.jpg',
      title: 'Bible Study Groups',
      category: 'community',
      date: '2023-10-05',
      description: 'Small group Bible study meeting',
      height: 'h-72'
    },
    {
      id: 10,
      src: '/placeholder-image.jpg',
      title: 'Prayer Garden',
      category: 'facilities',
      date: '2023-08-12',
      description: 'Peaceful prayer garden on our campus',
      height: 'h-80'
    },
    {
      id: 11,
      src: '/placeholder-image.jpg',
      title: 'Baptism Service',
      category: 'worship',
      date: '2023-09-17',
      description: 'Baptism service at the Jordan River',
      height: 'h-96'
    },
    {
      id: 12,
      src: '/placeholder-image.jpg',
      title: 'Volunteer Appreciation',
      category: 'events',
      date: '2023-11-26',
      description: 'Appreciation dinner for our dedicated volunteers',
      height: 'h-64'
    }
  ]

  const filteredImages = selectedFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedFilter)

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
              Photo <span className="text-accent-gold">Gallery</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              Explore memories from our community gatherings, worship services, 
              special events, and the beautiful spaces where we come together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Options */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-8">
              Browse by <span className="text-accent-gold">Category</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-primary-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{filter.icon}</span>
                  <span>{filter.name}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-6 text-gray-600">
              <span className="flex items-center justify-center space-x-2">
                <ImageIcon className="w-5 h-5" />
                <span>Showing {filteredImages.length} photos</span>
              </span>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  layout
                  className="break-inside-avoid mb-4"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="glass-card overflow-hidden cursor-pointer group">
                    {/* Placeholder for actual image */}
                    <div className={`${image.height} bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="text-center text-gray-400">
                        <ImageIcon className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm">{image.title}</p>
                      </div>
                      
                      {/* Overlay content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold mb-1">{image.title}</h3>
                        <p className="text-sm text-white/80 mb-2">{image.description}</p>
                        <div className="flex items-center space-x-2 text-xs">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(image.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Capturing <span className="text-accent-gold">Memories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every photo tells a story of faith, community, and God's goodness in our lives.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '2,500+', label: 'Photos Captured', icon: ImageIcon },
              { number: '150+', label: 'Events Documented', icon: Calendar },
              { number: '1,000+', label: 'People Featured', icon: Users },
              { number: '5+', label: 'Years of Memories', icon: Heart }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary-blue mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image placeholder */}
              <div className="h-96 bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <ImageIcon className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg">{selectedImage.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-blue mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="btn-primary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Share Your <span className="text-accent-gold">Photos</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Have photos from our events or activities? We'd love to feature them in our gallery! 
              Share your memories with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">Submit Photos</button>
              <button className="btn-primary">Contact Us</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery