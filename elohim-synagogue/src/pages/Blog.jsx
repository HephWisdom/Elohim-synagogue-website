import { Calendar, User, Tag, ArrowRight } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Finding Hope in Uncertain Times",
      excerpt: "In a world filled with uncertainty, how do we maintain hope and trust in God's plan?",
      author: "Apostle John Smith",
      date: "December 18, 2024",
      category: "Devotional",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Importance of Biblical Community",
      excerpt: "Exploring what Scripture teaches about fellowship and living in community with other believers.",
      author: "Pastor Sarah Johnson",
      date: "December 15, 2024",
      category: "Theological Insight",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "My Journey from Addiction to Freedom",
      excerpt: "A powerful testimony of how God's grace transformed a life trapped in addiction.",
      author: "Michael Thompson",
      date: "December 12, 2024",
      category: "Testimony",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Understanding God's Love Through Scripture",
      excerpt: "A deep dive into biblical passages that reveal the depths of God's unconditional love.",
      author: "Dr. Michael Brown",
      date: "December 10, 2024",
      category: "Theological Insight",
      readTime: "6 min read"
    }
  ]

  const categories = ["All", "Devotional", "Theological Insight", "Testimony", "Ministry"]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title">Blog & Reflections</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Devotionals, theological insights, and testimonies to encourage your faith journey
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-colors ${
                category === "All" 
                  ? "bg-primary-blue text-accent-gold" 
                  : "bg-gray-200 text-gray-700 hover:bg-primary-blue hover:text-accent-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-primary-blue to-blue-600 h-64 lg:h-auto"></div>
            <div className="p-8">
              <span className="bg-accent-gold text-primary-blue px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
              <h2 className="text-2xl font-bold text-primary-blue mt-4 mb-3">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{blogPosts[0].author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{blogPosts[0].date}</span>
                <Tag className="h-4 w-4 mr-1" />
                <span>{blogPosts[0].readTime}</span>
              </div>
              
              <button className="btn-primary inline-flex items-center">
                Read More
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200"></div>
              <div className="p-6">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  post.category === 'Devotional' ? 'bg-accent-gold text-primary-blue' :
                  post.category === 'Theological Insight' ? 'bg-primary-blue text-accent-gold' :
                  'bg-accent-red text-white'
                }`}>
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold text-primary-blue mt-4 mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <User className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <button className="text-primary-blue hover:text-accent-gold font-semibold text-sm inline-flex items-center">
                  Read More
                  <ArrowRight className="h-3 w-3 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="subsection-title">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest blog posts and devotionals
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Submit Your Story */}
        <div className="mt-16 bg-primary-blue rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold text-accent-gold mb-4">Share Your Story</h2>
          <p className="text-xl text-blue-100 mb-6">
            Have a testimony or insight to share? We'd love to feature your story on our blog.
          </p>
          <button className="btn-secondary">Submit Your Story</button>
        </div>
      </div>
    </div>
  )
}

export default Blog