import { motion } from 'framer-motion'
import { Award, Users, Clock, Leaf } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '50K+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Clock, label: 'Available 24/7', value: 'Always' },
    { icon: Leaf, label: 'Eco-Friendly', value: 'Yes' },
  ]

  const timeline = [
    { year: '1993', event: 'Founded by Christopher Duncan in London' },
    { year: '2000', event: 'Expanded to Europe with multiple offices' },
    { year: '2010', event: 'Became a multinational cleaning company' },
    { year: '2024', event: 'Serving thousands of clients worldwide' },
  ]

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="section-title">About Cleean</h1>
          <p className="section-subtitle">
            We've been serving clients with excellence since 1993, transforming spaces and changing lives.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
              We help you to make your life safe.
            </h2>
            <p className="text-xl text-dark-600 mb-6">
              We have been installing boilers and heating systems for over 10 years and we are proud to say we are experts in this field. We have a team of qualified members dedicated to providing the best service.
            </p>
            <p className="text-lg text-dark-600">
              Our commitment to excellence, integrity, and customer satisfaction has made us the trusted choice for thousands of clients.
            </p>
          </motion.div>
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg-soft border-2 border-primary-100 group"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1599720399814-e2c5734cb3db?w=600&h=500&fit=crop&q=80"
              alt="Professional Cleaning Team"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.section>

        {/* Stats */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(45, 157, 75, 0.1)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary-50 to-dark-50 rounded-xl p-8 text-center card-hover border border-primary-100"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={40} className="text-primary-500 mx-auto mb-4" />
                  </motion.div>
                  <motion.p 
                    className="text-4xl font-bold text-dark-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-dark-600 font-semibold">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Founder Quote */}
        <motion.section
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12 md:p-16 border-2 border-primary-300 shadow-lg-soft"
        >
          <motion.p 
            className="text-2xl md:text-3xl font-bold text-dark-900 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            "As people are getting busy in their work life, it is so difficult for them to manage time for cleaning their spaces by own. So here we understand people's problems and help them with cleanings."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="font-bold text-dark-900 text-lg">Christopher Duncan</p>
            <p className="text-primary-600 font-semibold">Founder, Cleean</p>
          </motion.div>
        </motion.section>

        {/* Timeline */}
        <section>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <motion.div 
                  className="hidden lg:flex h-16 w-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.year}
                </motion.div>
                <motion.div 
                  className="flex-1 bg-gradient-to-r from-primary-50 to-dark-50 rounded-xl p-8 border-2 border-primary-100"
                  whileHover={{ boxShadow: '0 10px 30px rgba(45, 157, 75, 0.2)' }}
                >
                  <p className="text-dark-600 lg:hidden mb-2 font-bold text-primary-600">{item.year}</p>
                  <p className="text-lg text-dark-900 font-semibold">{item.event}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-dark-900 text-white rounded-xl p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience the Cleean difference?
          </h2>
          <button className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 inline-block">
            Book Your Free Consultation
          </button>
        </motion.section>
      </div>
    </div>
  )
}
