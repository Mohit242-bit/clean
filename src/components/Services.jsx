import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'House Cleaning',
      description: 'Professional deep cleaning for your home with eco-friendly products and attention to detail.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=80',
    },
    {
      title: 'Office Cleaning',
      description: 'Keep your workspace pristine with our commercial cleaning services for businesses.',
      image: '/office.webp',
    },
    {
      title: 'Carpet Cleaning',
      description: 'Deep cleaning and stain removal for carpets, rugs, and upholstery with advanced equipment.',
      image: '/carpet.webp',
    },
    {
      title: 'Garden Cleaning',
      description: 'Maintain your outdoor spaces with professional garden cleaning and landscaping care.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop&q=80',
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
          <h2 className="section-title">Offering best cleaning services</h2>
          <p className="section-subtitle">
            We consider all the drivers of change gives you the blocks & components you need to change to create a truly professional website.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(45, 157, 75, 0.15)' }}
              className="bg-white rounded-xl overflow-hidden border border-dark-200 card-hover cursor-pointer group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-dark-200 relative">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-dark-900 mb-3"
                  initial={{ color: '#0f1419' }}
                  whileHover={{ color: '#2d9d4b' }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-dark-600 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Hover effect */}
              <div className="px-6 pb-6">
                <motion.button 
                  className="flex items-center gap-2 text-primary-500 font-semibold"
                  whileHover={{ gap: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
