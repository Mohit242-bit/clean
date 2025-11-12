import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get your first cleaning absolutely for free.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 inline-flex items-center justify-center gap-2">
              Book A Free Visit
            </button>
            <button className="px-8 py-4 bg-white text-dark-900 font-semibold rounded-lg hover:bg-dark-100 transition-all duration-300 inline-flex items-center justify-center gap-2">
              <Phone size={20} />
              Call us: 123-456-7890
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
