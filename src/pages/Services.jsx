import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'House Cleaning',
      description: 'Professional house cleaning services tailored to your specific needs.',
      image: 'https://images.unsplash.com/photo-1527515637460-9cdcb1f5940b?w=600&h=400&fit=crop&q=80',
      features: [
        'Bedroom & Living Areas',
        'Kitchen Deep Clean',
        'Bathroom Sanitization',
        'Floor Polishing',
      ],
    },
    {
      title: 'Office Cleaning',
      description: 'Keep your business pristine with our professional office cleaning.',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop&q=80',
      features: [
        'Office Spaces',
        'Retail Environments',
        'Floor Care',
        'Window Cleaning',
      ],
    },
    {
      title: 'Carpet Cleaning',
      description: 'Deep cleaning and stain removal for carpets, rugs, and upholstery.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80',
      features: [
        'Carpet Shampooing',
        'Stain Removal',
        'Odor Elimination',
        'Protection Treatment',
      ],
    },
    {
      title: 'Garden Cleaning',
      description: 'Transform your outdoor space with professional garden cleaning.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop&q=80',
      features: [
        'Lawn Maintenance',
        'Weed Removal',
        'Garden Organization',
        'Outdoor Cleaning',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Our Professional Services</h1>
          <p className="section-subtitle">
            We offer a comprehensive range of cleaning and maintenance services tailored to your needs.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2 lg:[direction:rtl]' : ''
              }`}
            >
              {/* Image */}
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg-soft border-2 border-primary-100 group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Content */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xl text-dark-600">
                    {service.description}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div className="space-y-3">
                  <h3 className="font-bold text-dark-900 text-lg">What's Included:</h3>
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                      >
                        <CheckCircle size={20} className="text-primary-500 flex-shrink-0" />
                      </motion.div>
                      <span className="text-dark-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.button 
                    className="btn-primary mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book This Service
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
