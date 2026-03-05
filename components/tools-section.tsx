'use client';

import { motion } from 'framer-motion';

const tools = [
  // Marketing
  { name: 'Meta Ads', icon: 'https://cdn.simpleicons.org/meta' },
  { name: 'Google Ads', icon: 'https://cdn.simpleicons.org/googleads' },
  { name: 'Google Analytics', icon: 'https://cdn.simpleicons.org/googleanalytics' },
  { name: 'Google Tag Manager', icon: 'https://cdn.simpleicons.org/googletagmanager' },
  { name: 'Hootsuite', icon: 'https://cdn.simpleicons.org/hootsuite' },
  { name: 'Buffer', icon: 'https://cdn.simpleicons.org/buffer' },

  // Frontend
  { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
  { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },

  // Backend
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'AWS', icon: 'https://i.postimg.cc/L4gsNhhy/id-S5TK0MYh-1772608383923.png' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel' },

  // Creative
  { name: 'Premiere Pro', icon: 'https://i.postimg.cc/gk0NCFbF/premiere-pro-5968525.png' },
  { name: 'After Effects', icon: 'https://i.postimg.cc/xdGvktVb/after-effects-5968428.png' },
  { name: 'DaVinci Resolve', icon: 'https://cdn.simpleicons.org/davinciresolve' },
  { name: 'Photoshop', icon: 'https://i.postimg.cc/1tjf4qXT/photoshop-5968520.png' },
  { name: 'Illustrator', icon: 'https://i.postimg.cc/yYvYNRG0/illustrator-5611037.png' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },

  // Mobile
  { name: 'Android Studio', icon: 'https://cdn.simpleicons.org/androidstudio' },
  { name: 'Xcode', icon: 'https://cdn.simpleicons.org/xcode' },

  { name: 'React Native', icon: 'https://cdn.simpleicons.org/react' },
  

  // Dev Tools
  { name: 'Capcut', icon: 'https://i.postimg.cc/Bb3HJFz9/1664284918capcut-icon-png.png' },
  { name: 'Netlify', icon: 'https://cdn.simpleicons.org/netlify' },
  { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions' },
  { name: 'Semrush', icon: 'https://cdn.simpleicons.org/semrush' },
  { name: 'Canva', icon: 'https://i.postimg.cc/Hxh9HjCf/1656734305canva-app-icon.png' },
  { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor' },
  { name: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp' },
];

export default function ToolsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
       <div className="text-center mb-20">
  <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
    Tools We Use
  </h2>

  {/* Purple underline */}
  <div className="w-24 h-1 bg-indigo-500 mx-auto my-6 rounded-full"></div>

  <p className="text-lg text-gray-600">
    Only logos shown. A quick glance at our daily toolkit.
  </p>
</div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center 
                         bg-white rounded-2xl shadow-sm 
                         hover:shadow-lg transition-all duration-300
                         p-6 cursor-pointer group"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-sm text-gray-600 text-center">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}