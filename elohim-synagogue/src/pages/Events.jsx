import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Easter Sunday Celebration",
      date: "March 31, 2024",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us for a special Easter celebration with music, message, and fellowship.",
      category: "Special Service"
    },
    {
      id: 2,
      title: "Theology School Open House",
      date: "April 15, 2024",
      time: "2:00 PM",
      location: "Education Building",
      description: "Learn about our theology programs and meet faculty members.",
      category: "Education"
    },
    {
      id: 3,
      title: "Community Outreach Day",
      date: "April 20, 2024",
      time: "9:00 AM",
      location: "Community Center",
      description: "Join us as we serve our local community with food and fellowship.",
      category: "Outreach"
    },
    {
      id: 4,
      title: "Youth Conference 2024",
      date: "May 3-5, 2024",
      time: "All Day",
      location: "Church Campus",
      description: "Three-day conference for teens and young adults with workshops and activities.",
      category: "Youth"
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title">Upcoming Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our church community through these upcoming events and activities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-accent-gold text-primary-blue px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                  <Calendar className="h-6 w-6 text-primary-blue" />
                </div>
                
                <h3 className="text-xl font-bold text-primary-blue mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{event.description}</p>
                
                <div className="flex gap-3">
                  <button className="btn-primary text-sm py-2 px-4">
                    Register
                  </button>
                  <button className="btn-secondary text-sm py-2 px-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-white rounded-lg p-8">
          <h2 className="subsection-title text-center mb-8">Event Calendar</h2>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Calendar className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg font-semibold">Interactive Calendar</p>
              <p className="text-sm">Calendar integration would go here</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary-blue rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold text-accent-gold mb-4">Want to Host an Event?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Have an idea for a church event or ministry activity? We'd love to hear from you!
          </p>
          <button className="btn-secondary">Submit Event Proposal</button>
        </div>
      </div>
    </div>
  )
}

export default Events