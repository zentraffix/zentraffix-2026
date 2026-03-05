'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
  useMotionValueEvent,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 80, suffix: '+', label: 'Projects Delivered' },
  { value: 7, suffix: '+', label: 'Clients Worldwide' },
  { value: 1, suffix: 'L+', label: 'Revenue Generated' },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [display, setDisplay] = useState(0);

  useMotionValueEvent(springValue, 'change', (latest) => {
    setDisplay(Math.floor(latest));
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function HistorySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="w-full px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6">
              Built on Results.{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Driven by Growth.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the past 5+ years, we've partnered with ambitious brands to
              turn ideas into scalable businesses. Our focus has always been
              simple — deliver measurable results, not just impressions.
            </p>
          </motion.div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}