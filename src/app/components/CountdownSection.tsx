"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./contactForm";

export default function CountdownSection() {
  const [showForm, setShowForm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [glitterPositions, setGlitterPositions] = useState<Array<{
    left: string;
    top: string;
    delay: number;
    duration: number;
    color: string;
    size: number;
    xOffset: number;
  }>>([]);
  const [confettiDistances, setConfettiDistances] = useState<Array<Array<number>>>([]);

  // Set mounted state and generate random values only on client
  useEffect(() => {
    setMounted(true);
    
    // Generate random positions for glitter particles (client-side only)
    const glitterData = Array.from({ length: 30 }, () => {
      const colors = ['#FFD700', '#FF1493', '#00FFFF', '#FF6B35', '#32CD32', '#FF69B4', '#FFFFFF'];
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 4,
        xOffset: (Math.random() - 0.5) * 40, // Pre-calculate x offset
      };
    });
    setGlitterPositions(glitterData);

    // Generate random distances for confetti particles (client-side only)
    const confettiData = Array.from({ length: 5 }, () =>
      Array.from({ length: 20 }, () => 60 + Math.random() * 40)
    );
    setConfettiDistances(confettiData);
  }, []);

  return (
    <>
      <section className="w-full bg-black text-white py-16 text-center relative overflow-hidden">
        {/* New Year Confetti Bombs */}
        {mounted && [...Array(5)].map((_, i) => {
          const positions = [
            { left: '10%', top: '20%' },
            { left: '30%', top: '15%' },
            { left: '50%', top: '25%' },
            { left: '70%', top: '18%' },
            { left: '90%', top: '22%' },
          ];
          const colors = ['#FFD700', '#FF1493', '#00FFFF', '#FF6B35', '#32CD32', '#FF69B4', '#FF4500', '#00CED1'];
          return (
            <motion.div
              key={`bomb-${i}`}
              className="absolute pointer-events-none"
              style={positions[i]}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.2, 1.5, 2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut",
              }}
            >
              {/* Explosion Center */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
                style={{
                  background: `radial-gradient(circle, ${colors[i % colors.length]}, transparent)`,
                  boxShadow: `0 0 30px ${colors[i % colors.length]}`,
                }}
              />
              {/* Confetti Particles */}
              {mounted && confettiDistances[i] && [...Array(20)].map((_, j) => {
                const angle = (j * 360) / 20;
                const distance = confettiDistances[i][j] || 80;
                const particleColor = colors[j % colors.length];
                return (
                  <motion.div
                    key={j}
                    className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * distance,
                      y: Math.sin((angle * Math.PI) / 180) * distance,
                      opacity: [1, 1, 0],
                      scale: [1, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeOut",
                    }}
                    style={{
                      background: particleColor,
                      boxShadow: `0 0 8px ${particleColor}`,
                    }}
                  />
                );
              })}
            </motion.div>
          );
        })}

        {/* Glitter Particles */}
        {mounted && glitterPositions.map((glitter, i) => {
          return (
            <motion.div
              key={`glitter-${i}`}
              className="absolute pointer-events-none rounded-full"
              suppressHydrationWarning
              style={{
                left: glitter.left,
                top: glitter.top,
                width: `${glitter.size}px`,
                height: `${glitter.size}px`,
                background: glitter.color,
                boxShadow: `0 0 ${glitter.size * 2}px ${glitter.color}`,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                y: [0, -20],
                x: [0, glitter.xOffset || 0],
              }}
              transition={{
                duration: glitter.duration,
                repeat: Infinity,
                delay: glitter.delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Sparkle Bursts */}
        {mounted && [...Array(8)].map((_, i) => {
          const positions = [
            { left: '15%', top: '30%' },
            { left: '25%', top: '60%' },
            { left: '40%', top: '45%' },
            { left: '55%', top: '70%' },
            { left: '75%', top: '50%' },
            { left: '85%', top: '35%' },
            { left: '20%', top: '80%' },
            { left: '80%', top: '75%' },
          ];
          const colors = ['#FFD700', '#FF1493', '#00FFFF', '#FF6B35', '#32CD32'];
          return (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute pointer-events-none"
              style={positions[i]}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              {[...Array(8)].map((_, j) => (
                <motion.div
                  key={j}
                  className="absolute w-1 h-6 rounded-full"
                  style={{
                    transform: `rotate(${j * 45}deg)`,
                    transformOrigin: 'center bottom',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-1px',
                    marginTop: '-12px',
                    background: `linear-gradient(to top, ${colors[i % colors.length]}, transparent)`,
                    boxShadow: `0 0 6px ${colors[i % colors.length]}`,
                  }}
                />
              ))}
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-4xl font-bold tracking-tight uppercase text-white mb-4">
            YEAR END DHAMAKA SALE OFFERS
          </h2>
          <motion.h3 
            className="text-2xl md:text-3xl font-light text-red-400 mb-6"
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Live Now
          </motion.h3>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to know about our exclusive Toyota deals and premium offers
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-12 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl border border-red-500 cursor-pointer relative z-10"
          >
            Unlock Offers
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-lg w-full"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center z-10 transition-colors"
            >
              ✕
            </button>
            <ContactForm buttonLabel="Book Now" />
          </motion.div>
        </div>
      )}
    </>
  );
}
