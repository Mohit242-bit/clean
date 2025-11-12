import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Our visual designer lets you quickly an of drag and drop your own way to customapps for both keep desktop, tabs, mobile & also tab for th both of it has been useful analytics report and we booked for the result to be done.',
      author: 'Chieko Chute',
      location: 'London',
    },
    {
      text: 'Our visual designer lets you quickly an of drag and drop your own way to customapps for both keep desktop, tabs, mobile & also tab for th both of it has been useful analytics report and we booked for the result to be done.',
      author: 'Cyndy Lillibridge',
      location: 'London',
    },
    {
      text: 'Our visual designer lets you quickly an of drag and drop your own way to customapps for both keep desktop, tabs, mobile & also tab for th both of it has been useful analytics report and we booked for the result to be done.',
      author: 'Brittni Lando',
      location: 'West London',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Trusted by thousand of people & companies</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-8 border border-dark-200 card-hover"
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-primary-200 mb-4" />

              {/* Text */}
              <p className="text-dark-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-dark-900">{testimonial.author}</p>
                <p className="text-dark-500 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
