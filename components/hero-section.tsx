'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const reviews = [
  { text: 'Our revenue doubled in 90 days', author: 'Veerakumar S' },
  { text: 'Best marketing team we\'ve worked with', author: 'Arul' },
  { text: 'Consistent leads every single week', author: 'Vimal J' },
  { text: 'They actually understand scaling', author: 'Abhishek Udiit' },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-background dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-background" />

      <div className="w-full px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6">
              We Don't Just Market —{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                We Engineer Predictable Growth
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              We help brands scale with performance-driven strategies, high-converting content, and systems built for long-term revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-base px-8 h-12"
                asChild
              >
                <a href="#contact">Book Free Strategy </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl" />

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
                      <div
                        key={index}
                        className="bg-card border border-border rounded-2xl p-6 shadow-lg backdrop-blur-sm"
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
                      </div>
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
