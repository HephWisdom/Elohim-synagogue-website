import { useState } from 'react'
import { Send, FileText, Users, Calendar } from 'lucide-react'

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    testimony: '',
    ministry: '',
    reference: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Application submitted! We will contact you soon.')
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Apply to Elohim School of Theology</h1>
          <p className="text-xl text-gray-600">
            Begin your journey in theological education and ministry preparation
          </p>
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 mb-12">
          <h2 className="subsection-title text-center mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="font-semibold text-primary-blue mb-2">1. Submit Application</h3>
              <p className="text-sm text-gray-600">Complete the online application form below</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-blue" />
              </div>
              <h3 className="font-semibold text-primary-blue mb-2">2. Interview</h3>
              <p className="text-sm text-gray-600">Schedule a personal interview with our admissions team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-red rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-primary-blue mb-2">3. Documentation</h3>
              <p className="text-sm text-gray-600">Submit required documents and references</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="font-semibold text-primary-blue mb-2">4. Enrollment</h3>
              <p className="text-sm text-gray-600">Receive acceptance and begin your studies</p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Application Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
            </div>

            {/* Program Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Desired Program *
              </label>
              <select
                name="program"
                required
                value={formData.program}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              >
                <option value="">Select a program</option>
                <option value="biblical-studies-cert">Biblical Studies Certificate</option>
                <option value="leadership-cert">Christian Leadership Certificate</option>
                <option value="ministry-foundations-cert">Ministry Foundations Certificate</option>
                <option value="theology-diploma">Diploma in Theology</option>
                <option value="pastoral-diploma">Pastoral Ministry Diploma</option>
                <option value="missions-diploma">Missions & Evangelism Diploma</option>
              </select>
            </div>

            {/* Testimony */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personal Testimony *
              </label>
              <textarea
                name="testimony"
                required
                rows="4"
                value={formData.testimony}
                onChange={handleChange}
                placeholder="Please share your testimony of faith and calling to ministry"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              ></textarea>
            </div>

            {/* Ministry Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ministry Experience
              </label>
              <textarea
                name="ministry"
                rows="3"
                value={formData.ministry}
                onChange={handleChange}
                placeholder="Describe your current or past ministry involvement"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              ></textarea>
            </div>

            {/* Reference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pastoral Reference *
              </label>
              <input
                type="text"
                name="reference"
                required
                value={formData.reference}
                onChange={handleChange}
                placeholder="Name and contact information of your pastor or spiritual leader"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary inline-flex items-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Submit Application
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-primary-blue rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold text-accent-gold mb-6">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-accent-gold mb-3">After Submission</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• You'll receive a confirmation email within 24 hours</li>
                <li>• Our admissions team will review your application</li>
                <li>• We'll contact you to schedule an interview</li>
                <li>• Decision notification within 2 weeks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent-gold mb-3">Need Help?</h3>
              <p className="text-blue-100 mb-4">
                Our admissions counselors are here to help guide you through the process.
              </p>
              <div className="space-y-2 text-sm">
                <p>📞 (555) 123-4567 ext. 201</p>
                <p>📧 admissions@elohimsynagogue.org</p>
                <p>🕒 Mon-Fri 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apply