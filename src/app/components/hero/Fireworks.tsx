'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Firework {
  id: number;
  x: number;
  color: string;
  delay: number;
}

const COLORS = [
  '#FFD700', // Gold
  '#FF4500', // Orange Red
  '#FF1493', // Deep Pink
  '#00FFFF', // Cyan
  '#FF69B4', // Hot Pink
  '#32CD32', // Lime Green
  '#FFD700', // Gold
  '#FF6347', // Tomato
];

export default function Fireworks() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide fireworks after 7 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  // Create 15 fireworks with staggered delays
  const fireworks = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: 10 + (i * 5) + Math.random() * 10, // Spread across screen
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    delay: i * 0.4, // Stagger launches
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <AnimatePresence>
        {fireworks.map((firework) => (
          <div key={firework.id}>
            {/* Rocket going up */}
            <motion.div
              initial={{
                bottom: '-50px',
                left: `${firework.x}%`,
                opacity: 0
              }}
              animate={{
                bottom: '50%',
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.2,
                delay: firework.delay,
                ease: 'easeOut',
              }}
              className="absolute"
            >
              <div
                className="w-1 h-8"
                style={{
                  background: `linear-gradient(to top, ${firework.color}, transparent)`,
                  boxShadow: `0 0 20px ${firework.color}, 0 0 40px ${firework.color}`,
                }}
              />
            </motion.div>

            {/* Burst effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1.5, 2, 2.5],
              }}
              transition={{
                duration: 1.5,
                delay: firework.delay + 1.2,
                ease: 'easeOut',
              }}
              className="absolute"
              style={{
                left: `${firework.x}%`,
                top: '50%',
                width: '200px',
                height: '200px',
                marginLeft: '-100px',
                marginTop: '-100px',
              }}
            >
              {/* Multiple particle layers for depth */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    rotate: i * 45,
                  }}
                  transition={{
                    duration: 0,
                  }}
                >
                  {/* Radial particles */}
                  <div
                    className="absolute w-2 h-16 rounded-full"
                    style={{
                      left: '50%',
                      top: '0',
                      marginLeft: '-4px',
                      background: `linear-gradient(to top, transparent, ${firework.color}, transparent)`,
                      boxShadow: `0 0 15px ${firework.color}, 0 0 30px ${firework.color}`,
                    }}
                  />
                </motion.div>
              ))}

              {/* Center glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 1.5],
                }}
                transition={{
                  duration: 0.8,
                  delay: 0,
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${firework.color}, transparent 70%)`,
                  boxShadow: `0 0 60px ${firework.color}, 0 0 100px ${firework.color}`,
                }}
              />

              {/* Sparkle particles */}
              {[...Array(24)].map((_, i) => {
                const angle = (360 / 24) * i;
                const distance = 80 + Math.random() * 40;
                return (
                  <motion.div
                    key={`sparkle-${i}`}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * distance,
                      y: Math.sin((angle * Math.PI) / 180) * distance,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: 'easeOut',
                    }}
                    className="absolute rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: '8px',
                      height: '8px',
                      marginLeft: '-4px',
                      marginTop: '-4px',
                      background: firework.color,
                      boxShadow: `0 0 10px ${firework.color}`,
                    }}
                  />
                );
              })}
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
