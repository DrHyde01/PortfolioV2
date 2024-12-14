'use client';

import { motion } from 'framer-motion';

export default function MaintenanceMessage() {
  return (
    <motion.div
      transition={{ duration: 0.25, delay: 0.5, ease: 'easeInOut' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col md:w-3/4 p-4  mt-12 backdrop-blur-md  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md shadow-lg  bg-gradient-to-br from-primary-50 dark:from-primary-950 to-transparent rotate-2"
    >
      <h3 className="font-montserrat text-primary-500 dark:text-almost-white font-bold text-lg md:text-xl mb-5">
        En cours de glow up ! 🌈
      </h3>
      <p className="font-montserrat text-dark-800 dark:text-almost-white font-light text-sm md:text-base">
        Le site se fait actuellement une beauté et reviendra très vite. Je reste
        bien entendu disponible pour toute demande de projet ou de
        collaboration. Hésitez pas à me contacter 😎
      </p>
    </motion.div>
  );
}
