import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSchoolDropdownOpen, setIsSchoolDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-accent-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
              <span className="text-accent-gold font-bold text-xl">E</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-primary-blue">Elohim Synagogue</h1>
              <p className="text-sm text-gray-600">House of God</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors ${
                isActive('/services') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
              }`}
            >
              Services
            </Link>
            
            {/* School Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSchoolDropdownOpen(true)}
              onMouseLeave={() => setIsSchoolDropdownOpen(false)}
            >
              <button
                className={`flex items-center font-medium transition-colors ${
                  location.pathname.startsWith('/school') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
                }`}
              >
                School
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isSchoolDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                  <Link
                    to="/school"
                    className="block px-4 py-3 text-primary-blue hover:bg-blue-50 hover:text-accent-gold rounded-t-lg"
                  >
                    Overview
                  </Link>
                  <Link
                    to="/school/programs"
                    className="block px-4 py-3 text-primary-blue hover:bg-blue-50 hover:text-accent-gold"
                  >
                    Programs
                  </Link>
                  <Link
                    to="/school/apply"
                    className="block px-4 py-3 text-primary-blue hover:bg-blue-50 hover:text-accent-gold rounded-b-lg"
                  >
                    Apply
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/events"
              className={`font-medium transition-colors ${
                isActive('/events') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
              }`}
            >
              Events
            </Link>
            <Link
              to="/sermons"
              className={`font-medium transition-colors ${
                isActive('/sermons') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
              }`}
            >
              Sermons
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-primary-blue hover:text-accent-gold"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors ${
                  isActive('/services') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
                }`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <div className="pl-4">
                <p className="font-medium text-primary-blue mb-2">School</p>
                <Link
                  to="/school"
                  className="block py-1 text-gray-600 hover:text-accent-gold"
                  onClick={closeMenu}
                >
                  Overview
                </Link>
                <Link
                  to="/school/programs"
                  className="block py-1 text-gray-600 hover:text-accent-gold"
                  onClick={closeMenu}
                >
                  Programs
                </Link>
                <Link
                  to="/school/apply"
                  className="block py-1 text-gray-600 hover:text-accent-gold"
                  onClick={closeMenu}
                >
                  Apply
                </Link>
              </div>
              <Link
                to="/events"
                className={`font-medium transition-colors ${
                  isActive('/events') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
                }`}
                onClick={closeMenu}
              >
                Events
              </Link>
              <Link
                to="/sermons"
                className={`font-medium transition-colors ${
                  isActive('/sermons') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
                }`}
                onClick={closeMenu}
              >
                Sermons
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-accent-gold' : 'text-primary-blue hover:text-accent-gold'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header