'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Websites', 'Videos', 'Meta Ads', 'Google Ads'];

const projects = [
  {
    title: 'Mechatron Motors',
    category: 'Videos',
    image: 'https://i.postimg.cc/9fFZdwF3/Screenshot2026-04-0417391.jpg',
    profile: 'https://www.instagram.com/mechatron_motors/',
    reels: [
      'https://www.instagram.com/reel/DOOA5zmE-Hf/',
      'https://www.instagram.com/reel/DOOA5zmE-Hf/',
      'https://www.instagram.com/reel/DOOA5zmE-Hf/',
    ],
  },
  {
    title: 'JMJ Catering',
    category: 'Videos',
    image: 'https://i.postimg.cc/zGdV1t50/Screenshot2026-04-0417421.jpg',
    profile: 'https://www.instagram.com/jmjcateringcbe27_official/',
    reels: [
      'https://www.instagram.com/reel/DOOA5zmE-Hf/',
      'https://www.instagram.com/reel/DOOA5zmE-Hf/',
      'https://www.instagram.com/reel/DOOA5zmE-Hf/',
    ],
  },
];


// 🔥 Convert reel → embed
const getEmbedUrl = (url) => {
  const id = url.split('/reel/')[1]?.split('/')[0];
  return `https://www.instagram.com/reel/${id}/embed`;
};

export default function PortfolioSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-6 px-6">

        {projects.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <img src={item.image} className="rounded-xl" />
            <h3 className="mt-2 font-semibold">{item.title}</h3>
          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)}>✕</button>

              <h2 className="text-2xl font-bold mb-4">
                {selected.title}
              </h2>

              {/* 🔥 OPEN PROFILE */}
              <button
                onClick={() => window.open(selected.profile, '_blank')}
                className="mb-6 bg-pink-600 text-white px-4 py-2 rounded"
              >
                Open Instagram Profile
              </button>

              {/* 🔥 3 REEL EMBEDS */}
              <div className="grid md:grid-cols-3 gap-4">
                {selected.reels.map((reel, i) => (
                  <iframe
                    key={i}
                    src={getEmbedUrl(reel)}
                    className="w-full h-[300px] rounded-xl"
                    allowFullScreen
                  />
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}