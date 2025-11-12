import { motion } from 'framer-motion'
import { CheckCircle, Phone } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const badges = [
    'Fully Satisfaction Guarantee & Commitment',
    'Trusted Professionals & Quality Services',
    'We are Committed, Insured and Bonded',
  ]

  return (
    <section className="pt-32 pb-20 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="section-title"
            >
              Best Cleaning Services Provider in West London.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-dark-600 leading-relaxed"
            >
              We are committed to the best quality in the field of industrial cleaning, home and garden cleaning.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary">Book A Free Visit</button>
              <button className="btn-secondary">
                <Phone size={20} />
                Call us: 123-456-7890
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 pt-4"
            >
              {badges.map((badge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative group"
          >
            <motion.div 
              className="aspect-square rounded-2xl overflow-hidden shadow-lg-soft border-2 border-primary-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src="https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?q=80&w=600&h=600&auto=format&fit=crop"
                alt="Professional Cleaning Services"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            {/* Animated Decorative elements */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary-500 rounded-full opacity-20 blur-3xl"
              animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="absolute top-8 -left-8 w-40 h-40 bg-primary-500 rounded-full opacity-15 blur-3xl"
              animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
