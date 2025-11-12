import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Cleean</h3>
            <p className="text-dark-300">
              Welcome to Squeaky Clean: a place of refinement and sparkle. Making home and office cleaning easy for you.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-dark-300 hover:text-primary-400 transition">Home Cleaning</Link></li>
              <li><Link to="/services" className="text-dark-300 hover:text-primary-400 transition">Office Cleaning</Link></li>
              <li><Link to="/services" className="text-dark-300 hover:text-primary-400 transition">Home Plumbing</Link></li>
              <li><Link to="/services" className="text-dark-300 hover:text-primary-400 transition">Garden Cleaning</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-dark-300 hover:text-primary-400 transition">Home</Link></li>
              <li><Link to="/about" className="text-dark-300 hover:text-primary-400 transition">About</Link></li>
              <li><Link to="/services" className="text-dark-300 hover:text-primary-400 transition">Services</Link></li>
              <li><a href="#contact" className="text-dark-300 hover:text-primary-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary-400" />
                <a href="tel:123-456-7890" className="text-dark-300 hover:text-primary-400 transition">123-456-7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary-400" />
                <a href="mailto:247service@gmail.com" className="text-dark-300 hover:text-primary-400 transition">247service@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary-400 mt-0.5" />
                <span className="text-dark-300">Amedee 4401 Waldeck Street, Nashville, TX 76051</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-700 pt-8 text-center text-dark-400">
          <p>&copy; 2024 Cleean. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
