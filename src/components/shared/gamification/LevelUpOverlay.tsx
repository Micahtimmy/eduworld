'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LevelUpOverlayProps {
  level: number
  onComplete?: () => void
}

export function LevelUpOverlay({ level, onComplete }: LevelUpOverlayProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(() => onComplete?.(), 500)
    }, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setVisible(false)}
        >
          {/* Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `hsl(${(i * 18) % 360}, 70%, 60%)`,
                left: '50%',
                top: '50%',
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
              animate={{
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 300,
                opacity: 0,
                scale: Math.random() * 2 + 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
            />
          ))}

          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
            className="text-center space-y-4"
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-8xl"
            >
              ⭐
            </motion.div>
            <div className="space-y-2">
              <p className="text-white/70 text-lg font-medium tracking-widest uppercase">Level Up!</p>
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.3 }}
                className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto shadow-2xl shadow-orange-500/50"
              >
                <span className="text-white font-bold text-4xl">{level}</span>
              </motion.div>
              <p className="text-white font-bold text-2xl">You&apos;re Level {level}!</p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-white/50 text-sm"
            >
              Tap to continue
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
