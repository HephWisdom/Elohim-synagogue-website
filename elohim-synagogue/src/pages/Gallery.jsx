import { Image } from 'lucide-react'

const Gallery = () => {
  // Placeholder for actual images
  const galleryItems = [
    { id: 1, title: "Sunday Service", category: "Worship" },
    { id: 2, title: "Baptism Ceremony", category: "Sacraments" },
    { id: 3, title: "Youth Ministry", category: "Youth" },
    { id: 4, title: "Christmas Celebration", category: "Events" },
    { id: 5, title: "Theology Graduation", category: "School" },
    { id: 6, title: "Community Outreach", category: "Outreach" },
    { id: 7, title: "Easter Service", category: "Worship" },
    { id: 8, title: "Bible Study Group", category: "Education" },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Memories and moments from our church community and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Image className="h-16 w-16 text-primary-blue" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary-blue mb-1">{item.title}</h3>
                <p className="text-sm text-accent-gold">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Want to share your photos from church events?</p>
          <button className="btn-primary">Submit Photos</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery