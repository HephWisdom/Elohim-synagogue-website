import { Link } from 'react-router-dom'
import { BookOpen, Users, Award, Calendar } from 'lucide-react'

const TheologySchool = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="section-title">Elohim School of Theology</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equipping believers for effective ministry through comprehensive biblical education
          </p>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="subsection-title">Welcome to Our School</h2>
            <p className="text-gray-600 mb-6">
              The Elohim School of Theology has been preparing men and women for ministry since 2000. 
              Our comprehensive programs combine rigorous academic study with practical ministry training.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're called to pastoral ministry, missions, or lay leadership, our experienced 
              faculty will guide you in developing both theological knowledge and spiritual maturity.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold">500+</div>
                <div className="text-gray-600">Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="bg-primary-blue rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold text-accent-gold mb-6">Why Choose Our School?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <BookOpen className="h-6 w-6 text-accent-gold mr-3 mt-1" />
                <span>Comprehensive biblical curriculum</span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-accent-gold mr-3 mt-1" />
                <span>Experienced faculty and mentors</span>
              </li>
              <li className="flex items-start">
                <Award className="h-6 w-6 text-accent-gold mr-3 mt-1" />
                <span>Accredited programs and certifications</span>
              </li>
              <li className="flex items-start">
                <Calendar className="h-6 w-6 text-accent-gold mr-3 mt-1" />
                <span>Flexible scheduling options</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Programs Overview */}
        <div className="mb-16">
          <h2 className="subsection-title text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-accent-gold">
              <h3 className="text-xl font-bold text-primary-blue mb-4">Certificate Programs</h3>
              <p className="text-gray-600 mb-4">
                Foundational courses for new believers and lay leaders seeking to deepen their faith.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Biblical Studies Certificate</li>
                <li>• Christian Leadership Certificate</li>
                <li>• Ministry Foundations Certificate</li>
              </ul>
              <Link to="/school/programs" className="btn-primary text-sm py-2 px-4">
                Learn More
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary-blue">
              <h3 className="text-xl font-bold text-primary-blue mb-4">Diploma Programs</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training for those pursuing full-time ministry or advanced leadership roles.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Diploma in Theology</li>
                <li>• Pastoral Ministry Diploma</li>
                <li>• Missions & Evangelism Diploma</li>
              </ul>
              <Link to="/school/programs" className="btn-primary text-sm py-2 px-4">
                Learn More
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-accent-red">
              <h3 className="text-xl font-bold text-primary-blue mb-4">Specialized Courses</h3>
              <p className="text-gray-600 mb-4">
                Focused training in specific areas of ministry and theological study.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Biblical Languages</li>
                <li>• Church History</li>
                <li>• Counseling & Care</li>
              </ul>
              <Link to="/school/programs" className="btn-primary text-sm py-2 px-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-primary-blue mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the next step in your spiritual and academic growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/school/programs" className="btn-primary">
              View All Programs
            </Link>
            <Link to="/school/apply" className="btn-secondary">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheologySchool