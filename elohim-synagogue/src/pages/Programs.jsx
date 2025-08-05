import { Link } from 'react-router-dom'
import { Clock, Users, Award, Book } from 'lucide-react'

const Programs = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title">Academic Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive theological education designed to equip you for effective ministry
          </p>
        </div>

        {/* Programs */}
        <div className="space-y-12">
          {/* Certificate Programs */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-accent-gold p-6">
              <h2 className="text-2xl font-bold text-primary-blue">Certificate Programs</h2>
              <p className="text-primary-blue">6-12 month programs for foundational learning</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-4 border-accent-gold pl-4">
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Biblical Studies Certificate</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>6 months</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Comprehensive introduction to Bible study methods, interpretation, and application.
                  </p>
                </div>
                <div className="border-l-4 border-accent-gold pl-4">
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Christian Leadership Certificate</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>9 months</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Leadership principles and practices for ministry and marketplace application.
                  </p>
                </div>
                <div className="border-l-4 border-accent-gold pl-4">
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Ministry Foundations Certificate</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>12 months</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Essential skills and knowledge for various forms of Christian ministry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diploma Programs */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary-blue p-6">
              <h2 className="text-2xl font-bold text-accent-gold">Diploma Programs</h2>
              <p className="text-blue-100">2-3 year programs for comprehensive theological education</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-4 border-primary-blue pl-4">
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Diploma in Theology</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>3 years</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Comprehensive theological education covering systematic theology, biblical studies, and church history.
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4">
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Pastoral Ministry Diploma</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>2.5 years</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Specialized training for pastoral ministry including preaching, counseling, and church administration.
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4">
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Missions & Evangelism</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>2 years</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Cross-cultural ministry preparation with focus on evangelism and church planting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Requirements */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-white rounded-lg p-8">
          <h2 className="subsection-title text-center mb-8">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary-blue mb-4">Certificate Programs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• High school diploma or equivalent</li>
                <li>• Personal testimony of faith</li>
                <li>• Pastoral recommendation letter</li>
                <li>• Application and interview</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-blue mb-4">Diploma Programs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Certificate program completion or equivalent</li>
                <li>• Two years of active ministry experience</li>
                <li>• Church leadership endorsement</li>
                <li>• Academic transcripts and interview</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Graduate Testimonials */}
        <div className="mt-16">
          <h2 className="subsection-title text-center mb-12">Graduate Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-gold font-bold text-xl">JM</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-blue">Rev. James Mitchell</h3>
                  <p className="text-sm text-gray-500">Theology Diploma Graduate 2020</p>
                  <p className="text-sm text-accent-gold">Now pastoring in Kenya</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The education I received at Elohim prepared me not just academically, but spiritually 
                for the challenges of ministry. I'm now pastoring a growing church in Nairobi."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-blue font-bold text-xl">AG</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-blue">Dr. Angela Grace</h3>
                  <p className="text-sm text-gray-500">Pastoral Ministry Graduate 2019</p>
                  <p className="text-sm text-accent-gold">Lead Pastor, Grace Community Church</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The practical ministry training combined with solid theological foundation gave me 
                confidence to lead effectively. Our church has grown from 50 to 300 members."
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary-blue rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold text-accent-gold mb-4">Ready to Apply?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Take the first step toward your theological education journey
          </p>
          <Link to="/school/apply" className="btn-secondary">
            Start Your Application
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Programs