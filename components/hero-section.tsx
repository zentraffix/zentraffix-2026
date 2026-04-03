'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';

const reviews = [
  { text: 'Our revenue doubled in 90 days', author: 'Veerakumar S' },
  { text: 'Best marketing team we\'ve worked with', author: 'Arul' },
  { text: 'Consistent leads every single week', author: 'Vimal J' },
  { text: 'They actually understand scaling', author: 'Abhishek Udiit' },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 gradient-animation" style={{
        backgroundImage: 'linear-gradient(-45deg, #3b82f6, #06b6d4, #0ea5e9, #06b6d4)',
        opacity: 0.05,
      }} />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 via-cyan-50/30 to-background dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-background" />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="w-full px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full"
            >
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 leading-tight">
              We Don't Just Market —{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ['0%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                We Engineer Growth
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              We help brands scale with performance-driven strategies, high-converting content, and systems built for long-term revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-base px-8 h-12 group"
                  asChild
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Book Free Strategy
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 h-12 hover:bg-blue-50 dark:hover:bg-blue-950/20"
                  asChild
                >
                  <a href="#services">View Services</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />

                <div className="relative space-y-4 overflow-hidden h-[500px] lg:h-[600px] mask-gradient">
                  <motion.div
                    animate={{
                      y: [0, -100 * reviews.length],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="space-y-4"
                  >
                    {[...reviews, ...reviews, ...reviews].map((review, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-foreground font-medium mb-2">
                          "{review.text}"
                        </p>
                        <p className="text-sm text-muted-foreground">
                          — {review.author}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
