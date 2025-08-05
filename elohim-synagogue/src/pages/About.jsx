import { Users, Target, Eye, Calendar } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="section-title">About Elohim Synagogue</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our faith community, our leadership, and the journey that brought us here
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-blue">
            <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-accent-gold" />
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center">
              To glorify God by making disciples of Jesus Christ, building a loving community, 
              and serving our neighbors with compassion and excellence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent-gold">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-6 w-6 text-primary-blue" />
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center">
              To be a beacon of hope and transformation in our community, raising up spiritually 
              mature believers who impact the world for Christ.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent-red">
            <div className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Our Values</h3>
            <p className="text-gray-600 text-center">
              Love, Truth, Unity, Excellence, and Service guide everything we do as we 
              seek to honor God and serve His people.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="subsection-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Elohim Synagogue was founded in 1995 with a simple vision: to create a place where 
                people could encounter God, grow in their faith, and serve their community. What started 
                as a small gathering in a living room has grown into a vibrant community of believers.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've been blessed to witness countless lives transformed by the power 
                of God's love. From establishing our theology school to launching various outreach 
                programs, we continue to expand our ministry to meet the needs of our growing community.
              </p>
              <div className="flex items-center space-x-4">
                <Calendar className="h-8 w-8 text-accent-gold" />
                <div>
                  <p className="font-semibold text-primary-blue">Founded in 1995</p>
                  <p className="text-gray-600">Nearly 30 years of faithful service</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-blue rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold text-accent-gold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold">500+</div>
                  <div className="text-blue-200">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold">150+</div>
                  <div className="text-blue-200">Theology Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold">25+</div>
                  <div className="text-blue-200">Ministry Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold">12</div>
                  <div className="text-blue-200">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <h2 className="section-title text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Senior Pastor */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-b from-primary-blue to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-2">Apostle John Smith</h3>
                <p className="text-accent-gold font-semibold mb-3">Senior Pastor & Founder</p>
                <p className="text-gray-600 text-sm mb-4">
                  Apostle Smith has been serving in ministry for over 35 years. He holds a doctorate 
                  in theology and is passionate about teaching, discipleship, and community outreach.
                </p>
                <p className="text-sm text-gray-500">
                  "My heart's desire is to see every person discover their purpose in God's kingdom."
                </p>
              </div>
            </div>

            {/* Associate Pastor */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-b from-accent-gold to-yellow-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-2">Pastor Sarah Johnson</h3>
                <p className="text-accent-gold font-semibold mb-3">Associate Pastor</p>
                <p className="text-gray-600 text-sm mb-4">
                  Pastor Sarah oversees our youth ministry, women's ministry, and community outreach 
                  programs. She brings 15 years of pastoral experience to our team.
                </p>
                <p className="text-sm text-gray-500">
                  "I believe in empowering others to step into their God-given potential."
                </p>
              </div>
            </div>

            {/* Theology School Dean */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-b from-accent-red to-red-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-2">Dr. Michael Brown</h3>
                <p className="text-accent-gold font-semibold mb-3">Dean of Theology School</p>
                <p className="text-gray-600 text-sm mb-4">
                  Dr. Brown leads our theology school with over 20 years of academic experience. 
                  He has authored several books on systematic theology and biblical studies.
                </p>
                <p className="text-sm text-gray-500">
                  "Sound biblical education is the foundation for effective ministry."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Believe */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="subsection-title text-center mb-8">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary-blue mb-3">The Trinity</h4>
              <p className="text-gray-600 mb-6">
                We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.
              </p>
              
              <h4 className="text-lg font-semibold text-primary-blue mb-3">Salvation</h4>
              <p className="text-gray-600 mb-6">
                Salvation is by grace through faith in Jesus Christ alone, not by works.
              </p>

              <h4 className="text-lg font-semibold text-primary-blue mb-3">Scripture</h4>
              <p className="text-gray-600">
                The Bible is the inspired, inerrant, and authoritative Word of God.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-blue mb-3">The Church</h4>
              <p className="text-gray-600 mb-6">
                The church is the body of Christ, called to worship, fellowship, and service.
              </p>
              
              <h4 className="text-lg font-semibold text-primary-blue mb-3">The Great Commission</h4>
              <p className="text-gray-600 mb-6">
                We are called to make disciples of all nations, baptizing and teaching them.
              </p>

              <h4 className="text-lg font-semibold text-primary-blue mb-3">Second Coming</h4>
              <p className="text-gray-600">
                Jesus Christ will return to establish His eternal kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About