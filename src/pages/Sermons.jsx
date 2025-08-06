import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Download, Calendar, User, Tag, Search, Filter } from 'lucide-react'

const Sermons = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const filters = [
    { id: 'all', name: 'All Sermons', icon: '📖' },
    { id: 'sunday', name: 'Sunday Messages', icon: '🙏' },
    { id: 'series', name: 'Sermon Series', icon: '📚' },
    { id: 'special', name: 'Special Events', icon: '✨' },
    { id: 'guest', name: 'Guest Speakers', icon: '🎤' }
  ]

  const sermons = [
    {
      id: 1,
      title: "Walking by Faith: Trusting God's Plan",
      speaker: "Rabbi David Goldstein",
      date: "2024-01-14",
      category: "sunday",
      series: "Faith in Action",
      duration: "35 mins",
      views: 1250,
      description: "Exploring what it means to trust God completely, even when we can't see the full picture.",
      tags: ["faith", "trust", "guidance"],
      featured: true
    },
    {
      id: 2,
      title: "The Power of Community",
      speaker: "Pastor Sarah Miller",
      date: "2024-01-07",
      category: "sunday",
      series: "Together We Stand",
      duration: "28 mins",
      views: 890,
      description: "Understanding the biblical foundation for community and how we can support one another.",
      tags: ["community", "fellowship", "support"],
      featured: false
    },
    {
      id: 3,
      title: "Hope in Times of Trial",
      speaker: "Dr. Michael Chen",
      date: "2023-12-31",
      category: "special",
      series: "New Year Reflections",
      duration: "42 mins",
      views: 2100,
      description: "Finding hope and strength in God during life's most challenging moments.",
      tags: ["hope", "trials", "perseverance"],
      featured: true
    },
    {
      id: 4,
      title: "The Heart of Worship",
      speaker: "Rabbi David Goldstein",
      date: "2023-12-24",
      category: "special",
      series: "Christmas Messages",
      duration: "30 mins",
      views: 1680,
      description: "Discovering the true meaning of worship in the Christmas story.",
      tags: ["worship", "christmas", "celebration"],
      featured: false
    },
    {
      id: 5,
      title: "Forgiveness and Healing",
      speaker: "Pastor Ruth Thompson",
      date: "2023-12-17",
      category: "sunday",
      series: "Grace Revealed",
      duration: "38 mins",
      views: 1340,
      description: "The transformative power of forgiveness in our relationships with God and others.",
      tags: ["forgiveness", "healing", "grace"],
      featured: false
    },
    {
      id: 6,
      title: "Youth and Purpose",
      speaker: "Pastor James Wilson",
      date: "2023-12-10",
      category: "guest",
      series: "Guest Speaker Series",
      duration: "25 mins",
      views: 720,
      description: "A special message for young people about discovering God's purpose for their lives.",
      tags: ["youth", "purpose", "calling"],
      featured: false
    }
  ]

  const filteredSermons = sermons
    .filter(sermon => selectedFilter === 'all' || sermon.category === selectedFilter)
    .filter(sermon => 
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )

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
              Sermons & <span className="text-accent-gold">Messages</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              Access our library of inspiring messages, biblical teachings, 
              and transformative sermons from our pastoral team and guest speakers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search sermons by title, speaker, or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Filter Buttons */}
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

            <div className="text-center mt-6 text-gray-600">
              <span>Showing {filteredSermons.length} sermon{filteredSermons.length !== 1 ? 's' : ''}</span>
            </div>
          </motion.div>

          {/* Featured Sermons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-primary-blue mb-8 text-center">
              Featured <span className="text-accent-gold">Messages</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredSermons.filter(sermon => sermon.featured).map((sermon) => (
                <motion.div
                  key={sermon.id}
                  variants={itemVariants}
                  className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Video Thumbnail */}
                  <div className="relative h-64 bg-gradient-to-br from-primary-blue to-primary-blue-light flex items-center justify-center group cursor-pointer">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className="text-white font-medium">Click to Watch</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-accent-gold text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(sermon.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{sermon.duration}</span>
                      <span>•</span>
                      <span>{sermon.views} views</span>
                    </div>

                    <h3 className="text-xl font-bold text-primary-blue mb-2">{sermon.title}</h3>
                    
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <User className="w-4 h-4" />
                      <span>{sermon.speaker}</span>
                    </div>

                    <p className="text-gray-600 mb-4">{sermon.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {sermon.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-primary-blue text-xs px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Watch</span>
                      </button>
                      <button className="btn-secondary flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Regular Sermons Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSermons.filter(sermon => !sermon.featured).map((sermon) => (
              <motion.div
                key={sermon.id}
                variants={itemVariants}
                className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Video Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center group cursor-pointer">
                  <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {sermon.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(sermon.date).toLocaleDateString()}</span>
                  </div>

                  <h3 className="text-lg font-bold text-primary-blue mb-2 line-clamp-2">{sermon.title}</h3>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{sermon.speaker}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{sermon.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{sermon.views} views</span>
                    <div className="flex space-x-2">
                      <button className="btn-primary text-sm px-3 py-1 flex items-center space-x-1">
                        <Play className="w-3 h-3" />
                        <span>Watch</span>
                      </button>
                      <button className="text-gray-600 hover:text-primary-blue transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Sermon <span className="text-accent-gold">Series</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive deeper into specific topics with our multi-part sermon series.
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
                title: "Faith in Action",
                description: "A 6-part series exploring practical faith in daily life",
                sermons: 6,
                image: "📖",
                color: "bg-primary-blue"
              },
              {
                title: "Grace Revealed",
                description: "Understanding God's grace through Scripture",
                sermons: 4,
                image: "✨",
                color: "bg-accent-gold"
              },
              {
                title: "Together We Stand",
                description: "Building strong Christian community",
                sermons: 5,
                image: "🤝",
                color: "bg-accent-red"
              }
            ].map((series, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`${series.color} p-6 text-white text-center`}>
                  <div className="text-4xl mb-4">{series.image}</div>
                  <h3 className="text-xl font-bold mb-2">{series.title}</h3>
                  <p className="text-white/90 text-sm">{series.sermons} sermons</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{series.description}</p>
                  <button className="btn-primary w-full">
                    View Series
                  </button>
                </div>
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
              Stay <span className="text-accent-gold">Connected</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't miss our latest sermons and teachings. Subscribe to our podcast 
              or join us live every Sunday for inspiring messages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">Subscribe to Podcast</button>
              <button className="btn-primary">Join Us Sunday</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Sermons