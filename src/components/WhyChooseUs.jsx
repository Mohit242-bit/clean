import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    'Fully Satisfaction Guarantee & Commitment',
    'Trusted Professionals & Quality Services',
    'We are Committed, Insured and Bonded',
  ]

  return (
    <section className="py-20 md:py-32 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg-soft">
              <img
                src="/chooseus.webp"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="section-title">Why will you choose us?</h2>

            <p className="text-xl text-dark-600 leading-relaxed">
              We have been installing boilers and heating systems for over 10 years and we are proud to say we are experts in this field. We have a team of qualified members.
            </p>

            {/* Features */}
            <div className="space-y-4 py-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={24} className="text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <button className="flex items-center gap-2 text-primary-500 font-semibold text-lg hover:gap-3 transition-all duration-300">
              More About Us <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
