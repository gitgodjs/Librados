'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const presentaciones = [
  {
    img: "https://i.pinimg.com/564x/5b/e1/c1/5be1c1893d4206e5fcea386e73065a51.jpg",
    nText: "Calidad Inigualable",
    text: "Nuestros chefs eligen los ingredientes más frescos, asegurando una experiencia culinaria excepcional."
  },
  {
    img: "https://i.pinimg.com/564x/8e/dc/92/8edc9265fb3b36537518d6df242ba5e7.jpg",
    nText: "Sabores únicos",
    text: "Cada bocado revela sabores que conectan con tradiciones y momentos especiales."
  },
  {
    img: "https://i.pinimg.com/736x/89/8d/ff/898dff82acfce4079f139749f13ffcd8.jpg",
    nText: "Ambiente amigable",
    text: "Un local acogedor que celebra la gastronomía y la amistad, donde cada comida deja una huella memorable."
  }
]

export const AnimatedPresentacion = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % presentaciones.length)
    }, 5000) 

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-rows-1 p-2 items-center justify-items-center w-full max-w-4xl md:grid-cols-2 gap-8"
        >
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src={presentaciones[currentIndex].img} 
              alt={presentaciones[currentIndex].nText} 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
          <div className="flex flex-col font-montserrat text-center md:text-left">
            <motion.h2
              className="text-2xl font-semibold italic md:text-3xl mb-4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1.5 }}
            >
              {presentaciones[currentIndex].nText}
            </motion.h2>
            <motion.p
              className="md:text-xl"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1.5 }}
            >
              {presentaciones[currentIndex].text}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}