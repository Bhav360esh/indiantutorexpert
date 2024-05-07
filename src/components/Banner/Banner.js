import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
  return (


<motion.section class="bg-other dark:bg-gray-800 dark:border-gray-700"  
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 py-8 text-2xl font-bold tracking-tight leading-none text-white md:text-3xl lg:text-5xl dark:white">Get Tutor in Just 30 Mins</h1>
        <p class="mb-12 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-64 dark:text-gray-400">Unlock Your Potential with Expert Tutoring Services: Personalized Learning Tailored Just for You!</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-5 px-10 text-base font-medium text-center text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Book Demo Class
            </a>
            <a href="#" class="py-5 px-10 sm:ms-4 text-base font-medium text-white focus:outline-none bg-transparent rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-200 dark:hover:bg-gray-900">
                Get Tutor Now
            </a>  
        </div>
    </div>
</motion.section>

  )
}

export default Banner