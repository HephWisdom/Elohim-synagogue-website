import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Tag, ArrowRight, Clock, Heart, MessageCircle } from 'lucide-react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📝' },
    { id: 'devotionals', name: 'Devotionals', icon: '🙏' },
    { id: 'insights', name: 'Biblical Insights', icon: '💡' },
    { id: 'testimonies', name: 'Testimonies', icon: '❤️' },
    { id: 'community', name: 'Community Life', icon: '👥' },
    { id: 'events', name: 'Event Highlights', icon: '🎉' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Finding Peace in God's Presence",
      excerpt: "In a world filled with chaos and uncertainty, discover how to find true peace through prayer and meditation on God's Word.",
      author: "Rabbi David Goldstein",
      date: "2024-01-15",
      category: "devotionals",
      readTime: "5 min read",
      featured: true,
      tags: ["peace", "prayer", "meditation"],
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: "The Beauty of Community Service",
      excerpt: "Reflecting on our recent community outreach and how serving others transforms both the giver and receiver.",
      author: "Sarah Cohen",
      date: "2024-01-12",
      category: "community",
      readTime: "3 min read",
      featured: false,
      tags: ["service", "community", "outreach"],
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      title: "Understanding Biblical Prophecy",
      excerpt: "A deep dive into the prophetic books of the Bible and their relevance for believers today.",
      author: "Dr. Michael Chen",
      date: "2024-01-10",
      category: "insights",
      readTime: "8 min read",
      featured: true,
      tags: ["prophecy", "scripture", "study"],
      likes: 234,
      comments: 45
    },
    {
      id: 4,
      title: "My Journey to Faith",
      excerpt: "A personal testimony of how God transformed a life of doubt into one of unwavering faith and purpose.",
      author: "Rebecca Martinez",
      date: "2024-01-08",
      category: "testimonies",
      readTime: "6 min read",
      featured: false,
      tags: ["testimony", "faith", "transformation"],
      likes: 178,
      comments: 67
    },
    {
      id: 5,
      title: "Youth Conference 2024 Highlights",
      excerpt: "Amazing moments from our recent youth conference, featuring inspiring speakers and life-changing workshops.",
      author: "Pastor James Wilson",
      date: "2024-01-05",
      category: "events",
      readTime: "4 min read",
      featured: false,
      tags: ["youth", "conference", "inspiration"],
      likes: 92,
      comments: 18
    },
    {
      id: 6,
      title: "The Power of Forgiveness",
      excerpt: "Exploring the biblical foundation of forgiveness and its transformative power in our relationships.",
      author: "Pastor Ruth Thompson",
      date: "2024-01-03",
      category: "devotionals",
      readTime: "7 min read",
      featured: false,
      tags: ["forgiveness", "relationships", "healing"],
      likes: 203,
      comments: 34
    },
    {
      id: 7,
      title: "Wisdom from the Book of Proverbs",
      excerpt: "Practical wisdom for daily living from one of the Bible's most treasured books of wisdom literature.",
      author: "Rabbi David Goldstein",
      date: "2023-12-28",
      category: "insights",
      readTime: "5 min read",
      featured: false,
      tags: ["wisdom", "proverbs", "practical"],
      likes: 145,
      comments: 28
    },
    {
      id: 8,
      title: "Building Stronger Families",
      excerpt: "Biblical principles for creating loving, supportive family relationships that honor God.",
      author: "Pastor Sarah Miller",
      date: "2023-12-25",
      category: "community",
      readTime: "6 min read",
      featured: false,
      tags: ["family", "relationships", "love"],
      likes: 167,
      comments: 41
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
              Blog & <span className="text-accent-gold">Reflections</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              Discover inspiring devotionals, biblical insights, personal testimonies, 
              and reflections on faith, community, and spiritual growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
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
            
            <div className="mt-6 text-gray-600">
              <span>Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}</span>
            </div>
          </motion.div>

          {/* Featured Posts */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-primary-blue mb-8">
              Featured <span className="text-accent-gold">Articles</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPosts.filter(post => post.featured).map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  {/* Featured Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-primary-blue to-primary-blue-light flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="text-6xl mb-4">📖</div>
                      <p className="font-medium">Featured Article</p>
                    </div>
                    <div className="absolute top-4 left-4 bg-accent-gold text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-primary-blue mb-3 group-hover:text-primary-blue-light transition-colors">
                      {post.title}
                    </h2>

                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-primary-blue text-xs px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-500 text-sm">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <button className="btn-primary text-sm flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Regular Posts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                {/* Post Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <div className="text-4xl">
                    {post.category === 'devotionals' && '🙏'}
                    {post.category === 'insights' && '💡'}
                    {post.category === 'testimonies' && '❤️'}
                    {post.category === 'community' && '👥'}
                    {post.category === 'events' && '🎉'}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-primary-blue mb-2 group-hover:text-primary-blue-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{post.author}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-gray-500 text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <button className="text-primary-blue hover:text-primary-blue-light transition-colors font-medium text-sm flex items-center space-x-1">
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-6">
              Stay <span className="text-accent-gold">Inspired</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter and receive weekly devotionals, 
              biblical insights, and updates from our community.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
                <button className="px-6 py-3 bg-primary-blue text-white font-medium rounded-r-lg hover:bg-primary-blue-light transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                We respect your privacy and never share your information.
              </p>
            </div>
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
              Share Your <span className="text-accent-gold">Story</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Have a testimony, insight, or reflection you'd like to share? 
              We'd love to feature your story on our blog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">Submit Your Story</button>
              <button className="btn-primary">Contact Our Team</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog