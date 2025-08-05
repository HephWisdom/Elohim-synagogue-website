import { Play, Download, Search, Filter } from 'lucide-react'

const Sermons = () => {
  const sermons = [
    {
      id: 1,
      title: "Walking in Faith During Difficult Times",
      speaker: "Apostle John Smith",
      date: "December 15, 2024",
      series: "Faith Journey",
      duration: "45 min",
      type: "video"
    },
    {
      id: 2,
      title: "The Power of Prayer in Community",
      speaker: "Pastor Sarah Johnson",
      date: "December 8, 2024",
      series: "Prayer Life",
      duration: "38 min",
      type: "audio"
    },
    {
      id: 3,
      title: "Understanding God's Grace",
      speaker: "Dr. Michael Brown",
      date: "December 1, 2024",
      series: "Foundations",
      duration: "42 min",
      type: "video"
    },
    {
      id: 4,
      title: "Living with Purpose",
      speaker: "Apostle John Smith",
      date: "November 24, 2024",
      series: "Faith Journey",
      duration: "50 min",
      type: "video"
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title">Sermons & Media</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Listen to inspiring messages and teachings from our pastoral team
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search sermons..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
              <option value="">All Speakers</option>
              <option value="apostle-john">Apostle John Smith</option>
              <option value="pastor-sarah">Pastor Sarah Johnson</option>
              <option value="dr-michael">Dr. Michael Brown</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
              <option value="">All Series</option>
              <option value="faith-journey">Faith Journey</option>
              <option value="prayer-life">Prayer Life</option>
              <option value="foundations">Foundations</option>
            </select>
          </div>
        </div>

        {/* Sermons List */}
        <div className="space-y-6">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                {/* Thumbnail */}
                <div className="bg-gradient-to-br from-primary-blue to-blue-600 flex items-center justify-center h-48 lg:h-auto">
                  <Play className="h-16 w-16 text-accent-gold" />
                </div>
                
                {/* Content */}
                <div className="lg:col-span-3 p-6">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-blue mb-2">{sermon.title}</h3>
                      <p className="text-gray-600 mb-1">Speaker: {sermon.speaker}</p>
                      <p className="text-gray-500 text-sm">{sermon.date} • {sermon.duration}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-accent-gold text-primary-blue px-3 py-1 rounded-full text-sm font-semibold">
                        {sermon.series}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        sermon.type === 'video' 
                          ? 'bg-accent-red text-white' 
                          : 'bg-primary-blue text-accent-gold'
                      }`}>
                        {sermon.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button className="btn-primary text-sm py-2 px-4 inline-flex items-center">
                      <Play className="h-4 w-4 mr-2" />
                      Play Now
                    </button>
                    <button className="btn-secondary text-sm py-2 px-4 inline-flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Series */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-white rounded-lg p-8">
          <h2 className="subsection-title text-center mb-8">Featured Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-10 w-10 text-accent-gold" />
              </div>
              <h3 className="text-lg font-semibold text-primary-blue mb-2">Faith Journey</h3>
              <p className="text-gray-600 text-sm">A comprehensive look at living by faith in everyday life</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-10 w-10 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-primary-blue mb-2">Prayer Life</h3>
              <p className="text-gray-600 text-sm">Deepening your relationship with God through prayer</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-blue mb-2">Foundations</h3>
              <p className="text-gray-600 text-sm">Essential Christian doctrines and biblical foundations</p>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 bg-primary-blue rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold text-accent-gold mb-4">Never Miss a Message</h2>
          <p className="text-xl text-blue-100 mb-6">
            Subscribe to our podcast or YouTube channel for the latest sermons
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">Subscribe to Podcast</button>
            <button className="btn-primary bg-accent-red text-white hover:bg-red-600">
              YouTube Channel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sermons